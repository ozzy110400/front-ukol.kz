import { useEffect, useRef, useState, useCallback } from 'preact/hooks';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import NearMeIcon from '@mui/icons-material/NearMe';
import {
  Box,
  TextField,
  Autocomplete,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import debounce from 'lodash/debounce';
import { addressByLatLng, autocompleteMap, geocodeByPlaceID } from 'helpers/api';
import { green } from '@mui/material/colors';

export default function MapComponent() {
  console.log("MapComponent rendered");

  const mapRef = useRef<L.Map | null>(null);
  const [center, setCenter] = useState<[number, number]>([43.238949, 76.889709]); // Default center
  const [zoom, setZoom] = useState<number>(15);
  
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [isLocationLoading, setIsLocationLoading] = useState(false); // New loading state for location

  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]); 


  const handleShareLocation = () => {
    setIsLocationLoading(true); // Start loading
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          setZoom(18);
          setIsLocationLoading(false); // Stop loading
        },
        (error) => {
          console.error("Error getting location:", error);
          setCenter([43.238949, 76.889709]);
          setZoom(15);
          setIsLocationLoading(false); // Stop loading on error
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      console.log("Geolocation is not available");
      setIsLocationLoading(false); // Stop loading if geolocation is unavailable
    }
  };

  // Function to handle when the map dragging stops
  const handleMoveEnd = async () => {
    if (mapRef.current) {
      const currentCenter = mapRef.current.getCenter();
      const lat = currentCenter.lat;
      const lng = currentCenter.lng;
      try {
        const response = await addressByLatLng(lat, lng);

        let address = response.formatted_address;
        setAddress(address)
        setCurrentOrder((prevOrder) => ({ ...prevOrder, streetAndBuildingNumber: address,  lat:lat, lng:lng }));
        setSuggestions([])
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    }
  };

  // Fetch address suggestions when the user types
  const fetchSuggestions = async (input: string) => {
    if (input.length > 2) {
      setIsLoadingAddress(true);
      try {
        const response = await autocompleteMap(input);
        setSuggestions(response.predictions);
        
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setIsLoadingAddress(false);
      }
    } else {
      setSuggestions([]);
    }
  };
  
  const debouncedFetchSuggestions = useCallback(
    debounce((input: string) => fetchSuggestions(input), 500),
    []
  );

  // Handle selection of an address suggestion
  const handleSuggestionClick = async (suggestion: any) => {
   const response = await geocodeByPlaceID(suggestion.place_id);

   const {lat, lng} = response.geocode

    const newCenter: [number, number] = [parseFloat(lat), parseFloat(lng)];
    setCenter(newCenter);
     mapRef.current?.setView(newCenter, zoom);
    let address = response.description;
    setZoom(18)
    setAddress(address); // Set address to input field
    setSuggestions([]); // Clear suggestions
  };
  

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map
      mapRef.current = L.map('map', {
        attributionControl: false,
        center,
        zoom,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
      }).addTo(mapRef.current);

      const markerIcon = L.divIcon({
        className: 'custom-marker', 
        html: `
          <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
            <!-- Circle with Red Cross -->
            <div style="width: 30px; height: 30px; background-color: white; border-radius: 50%; border: 2px solid red; display: flex; justify-content: center; align-items: center;">
              <div style="width: 16px; height: 2px; background-color: red; position: absolute;"></div>
              <div style="width: 2px; height: 16px; background-color: red; position: absolute;"></div>
            </div>
            <!-- Stick -->
            <div style="width: 2px; height: 30px; background-color: black;"></div>
          </div>`,
        iconSize: [30, 60], 
        iconAnchor: [15, 60], 
      });

      const centerMarker = L.marker(center, {
        icon: markerIcon,
        interactive: false, // Keep marker non-interactive
      }).addTo(mapRef.current);

      // Update marker to always be in the center on map move
      mapRef.current.on('move', () => {
        const currentCenter = mapRef.current?.getCenter();
        if (currentCenter) {
          centerMarker.setLatLng(currentCenter);
        }
      });

      // Detect when map movement ends
      mapRef.current.on('moveend', handleMoveEnd);
    } else {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  useEffect(() => {
    const requestLocation = () => {
      setIsLocationLoading(true); // Start loading
  
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCenter([latitude, longitude]); // Update map center
            setZoom(18); // Zoom to user's location
            setIsLocationLoading(false); // Stop loading
          },
          (error) => {
            console.error("Error getting location:", error);
            setIsLocationLoading(false); // Stop loading on error
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      } else {
        console.error("Geolocation is not available");
        setIsLocationLoading(false); // Stop loading if geolocation is unavailable
      }
    };
  
    // Ask for location on component mount
    requestLocation();
  }, []); 


  return (
    <Box>
      <div id="map" style={{ height: '400px', width: '100%' }} />
      <IconButton
        onClick={handleShareLocation}
        sx={{
          position: 'absolute',
          top: 390,
          right: 12,
          backgroundColor: 'white',
          boxShadow: 2,
          '&:hover': { backgroundColor: 'lightgray' },
          zIndex: 1000,
        }}
      >
        {isLocationLoading ? (
          <CircularProgress size={24} sx={{ color: green[400] }} />
        ) : (
          <NearMeIcon />
        )}
      </IconButton>
      <Box sx={{ p: 2 }}>
        <Autocomplete
          freeSolo
          options={suggestions}
          inputValue={address}
          getOptionLabel={(option) => option.description || ''}
          filterOptions={(x) => x}
          onInputChange={(event, value) => {
            setAddress(value);
            debouncedFetchSuggestions(value);
          }}
          onChange={(event, selectedOption) =>
            selectedOption && handleSuggestionClick(selectedOption)
          }
          loading={isLoadingAddress}
          renderInput={(params) => (
            <TextField
              {...params as any} 
              required              
              variant="standard"
              label="Адрес"
              sx={{
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'darkgray', // Focused color of the label
                  },
                '& .MuiInput-underline:before': {
                  borderBottomWidth: '3px', // Thickness of the underline
                  borderBottomColor: 'darkgray',
                },
                '& .MuiInput-underline:after': {
                  borderBottomWidth: '3px', // Thickness after focus
                  borderBottomColor: 'darkgray',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomWidth: '3px', // Thickness on hover
                  borderBottomColor: 'darkgray',
                },
              }}
              
              onChange={(e) => {
                const target = e.target as HTMLInputElement; 
                if (target) {
                  setAddress(target.value);
                  debouncedFetchSuggestions(target.value);
                }
              }}
            />
          )}
        />
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <TextField
            label="Квартира"
            value={currentOrder.flat || ''}
            sx={{
              '& .MuiInputLabel-root.Mui-focused': {
                  color: 'darkgray', // Focused color of the label
                },
              '& .MuiInput-underline:before': {
                borderBottomWidth: '3px', // Thickness of the underline
                borderBottomColor: 'darkgray',
              },
              '& .MuiInput-underline:after': {
                borderBottomWidth: '3px', // Thickness after focus
                borderBottomColor: 'darkgray',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomWidth: '3px', // Thickness on hover
                borderBottomColor: 'darkgray',
              },
            }}
            onChange={(e) => {
              const target = e.target as HTMLInputElement | null;
              if (target) {
                setCurrentOrder((prev) => ({ ...prev, flat: target.value }));
              }
            }}
            variant="standard"
          />
          <TextField
            label="Этаж"
            value={currentOrder.floor || ''}
            sx={{
              '& .MuiInputLabel-root.Mui-focused': {
                  color: 'darkgray', // Focused color of the label
                },
              '& .MuiInput-underline:before': {
                borderBottomWidth: '3px', // Thickness of the underline    
                borderBottomColor: 'darkgray',
              },
              '& .MuiInput-underline:after': {
                borderBottomWidth: '3px', // Thickness after focus
                borderBottomColor: 'darkgray',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomWidth: '3px', // Thickness on hover
                borderBottomColor: 'darkgray',
              },
            }}
            onChange={(e) => {
              const target = e.target as HTMLInputElement | null;
              if (target) {
                setCurrentOrder((prev) => ({ ...prev, floor: target.value }));
              }
            }}
            variant="standard"
          />
        </Box>
      </Box>
    </Box>
  );
}
