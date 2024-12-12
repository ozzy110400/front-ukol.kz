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
import currentOrderAtom from '../../atoms/currentOrder';
import debounce from 'lodash/debounce';
import { addressByLatLng, autocompleteMap, geocodeByPlaceID } from 'helpers/api';
import { green } from '@mui/material/colors';
import axios from 'axios';


export default function MapComponent() {
  const mapRef = useRef<L.Map | null>(null);
  const [center, setCenter] = useState<[number, number]>([43.238949, 76.889709]); // Default center
  const [zoom, setZoom] = useState<number>(15);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // Share location using browser geolocation
  const handleShareLocation = () => {
    setIsLocationLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          setZoom(18);
          setIsLocationLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocationLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      console.log("Geolocation is not available");
      setIsLocationLoading(false);
    }
  };

  useEffect(() => {
    handleShareLocation();
  }, []);

  // Reverse geocode to fetch address based on map center
  const handleMoveEnd = useCallback(async () => {
    if (mapRef.current) {
      const currentCenter = mapRef.current.getCenter();
      const lat = currentCenter.lat;
      const lng = currentCenter.lng;
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&lang=ru`
        );
        
        const data = response.data;
        const road = data.address?.road || '';
        const houseNumber = data.address?.house_number || '';
        const fullAddress = houseNumber ? `${road} ${houseNumber}` : road;

        setAddress(fullAddress);
        setCurrentOrder((prev) => ({
          ...prev,
          streetAndBuildingNumber: fullAddress,
          lat: lat,
          lng: lng,
        }));
        setSuggestions([]);
        window.clarity('set', 'address_entered_by_map');
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    }
  }, [setCurrentOrder]);

  // Fetch address suggestions for autocompletion
  const fetchSuggestions = async (input: string) => {
    if (input.length > 2) {
      setIsLoadingAddress(true);
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${input}&format=json&lang=ru&countrycodes=KZ`
        );        
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setIsLoadingAddress(false);
      }
    } else {
      setSuggestions([]);
    }

    window.clarity('set', 'address_entered_by_text');

  };

  const debouncedFetchSuggestions = useCallback(
    debounce((input: string) => fetchSuggestions(input), 500),
    []
  );

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion: any) => {
    const { lat, lon, display_name } = suggestion;
    const newCenter: [number, number] = [parseFloat(lat), parseFloat(lon)];
    setCenter(newCenter);
    setZoom(18);
    setAddress(display_name);
    setCurrentOrder((prev) => ({
      ...prev,
      streetAndBuildingNumber: display_name,
      lat: lat,
      lng: lon,
    }));
    setSuggestions([]);
  };

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map('map', {
        attributionControl: false,
        center,
        zoom,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);

      const markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 30px; height: 30px; background-color: white; border-radius: 50%; border: 2px solid red; display: flex; justify-content: center; align-items: center;">
              <div style="width: 16px; height: 2px; background-color: red; position: absolute;"></div>
              <div style="width: 2px; height: 16px; background-color: red; position: absolute;"></div>
            </div>
            <div style="width: 2px; height: 30px; background-color: black;"></div>
          </div>`,
        iconSize: [30, 60],
        iconAnchor: [15, 60],
      });

      const centerMarker = L.marker(center, {
        icon: markerIcon,
        interactive: false,
      }).addTo(mapRef.current);

      mapRef.current.on('move', () => {
        const currentCenter = mapRef.current?.getCenter();
        if (currentCenter) {
          centerMarker.setLatLng(currentCenter);
        }
      });

      mapRef.current.on('moveend', handleMoveEnd);
    } else {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom, handleMoveEnd]);
  
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
          getOptionLabel={(option) => option.display_name || ''}
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
