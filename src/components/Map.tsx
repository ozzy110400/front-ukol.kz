import { useEffect, useRef, useState, useCallback } from 'preact/hooks';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Box, TextField, List, ListItem, ListItemText, Autocomplete, CircularProgress, ListItemButton, IconButton } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { green } from '@mui/material/colors';

export default function MapComponent() {
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
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
        let address;
        if (response.data.address.house_number) {
          address = `${response.data.address.road} ${response.data.address.house_number}`;
        } else {
          address = response.data.address.road;
        }
        setAddress(address)
        setCurrentOrder((prevOrder) => ({ ...prevOrder, streetAndBuildingNumber: address }));
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
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${input}&format=json`);
        setSuggestions(response.data);
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
  const handleSuggestionClick = (suggestion: any) => {

    const { lat, lon } = suggestion;
    const newCenter: [number, number] = [parseFloat(lat), parseFloat(lon)];
    setCenter(newCenter);
    mapRef.current?.setView(newCenter, zoom);
    let address;
    if (suggestion.data.address.house_number) {
    address = `${suggestion.data.address.road} ${suggestion.data.address.house_number}`;
    } else {
    address = suggestion.data.address.road;
    }
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

  return (
    <Box > 
      <div id="map" style={{ height: '400px', width: '100%' }} />
      <IconButton
        onClick={handleShareLocation}
        sx={{
          position: 'absolute',
          top: 340,
          right: 16,
          backgroundColor: 'white',
          boxShadow: 2,
          '&:hover': {
            backgroundColor: 'lightgray',
          },
          zIndex: 1000, // Ensure it stays on top
        }}
      >
        {isLocationLoading ? (
           <Box
           sx={{
             width: 24,
             height: 24,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             backgroundColor: 'white',
             borderRadius: '50%',
           }}
         >
           <CircularProgress 
              size={24}
              sx={{     
                color: '#88e788',
                position: 'absolute', 
                top: 8, 
                right: 8 
              }} />
               </Box>
        ) : (<NearMeIcon />)
        }

      </IconButton>
      <Box sx={{ position: 'relative',flexDirection: 'column', alignItems: 'center', margin: 2, }}>
      <Box display="flex" gap={2} sx={{ mb: 2 }}>
        <Autocomplete
          freeSolo
          options={suggestions || []}
          inputValue={address}
          getOptionLabel={(option) => option.display_name || ''}
          filterOptions={x => x}   
          sx={{ flexGrow: 1 }}   
          renderInput={(params) => (
            <TextField
              {...params}
              required
              variant="outlined"
              label="Адрес"
              onChange={(e) => {
                const target = e.target as HTMLInputElement; 
                if (target) {
                  setAddress(target.value);
                  debouncedFetchSuggestions(target.value);
                }
              }}
            />
          )}
          onInputChange={(event, newInputValue) => {
            // Clear input when clear button is pressed
            if (event === null) {
              setAddress(''); // Reset address
            } else {
              setAddress(newInputValue);
            }
          }}
          onChange={(event, selectedOption) => {
            if (selectedOption) {
              handleSuggestionClick(selectedOption);
            }
          }}
          loading={isLoadingAddress}
        />
        <TextField
          required
          label="Квартира"
          value={currentOrder.flat || ''}
          onChange={(e) => {
            const target = e.target as HTMLInputElement; 
            if (target) {
              setCurrentOrder(prevOrder => ({ ...prevOrder, flat: target.value }))
            }
          }}
          variant="outlined"
          sx={{ width: '20%'}} 
        />
      </Box>
      </Box>
      {/* <Box sx={{ position: 'relative',flexDirection: 'column', alignItems: 'center', margin: 2, }}>
      <Box display="flex" gap={2} sx={{ mb: 2 }}>
      <TextField
          required
          variant="outlined"
          label="Адрес"
          value={address}
          onChange={(e) => {
            const target = e.target as HTMLInputElement; // Type assertion
            if (target) {
              setAddress(target.value);
              debouncedFetchSuggestions(target.value);
            }
          }}
          sx={{ flexGrow: 1 }} // This field takes the available space
        />
        <TextField
          required
          label="Квартира"
          value={currentOrder.flat || ''}
          onChange={(e) => {
            const target = e.target as HTMLInputElement; // Type assertion
            if (target) {
              setCurrentOrder(prevOrder => ({ ...prevOrder, flat: target.value }))
            }
          }
        }
          variant="outlined"
          sx={{ width: '20%' }} // Adjust the width as needed
        />
      </Box> 
       {isLoadingAddress ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : suggestions.length > 0 && (
          <List sx={{ 
            position: 'absolute', 
            marginLeft: 2,
            marginRight: 2,
            top: '100%', 
            left: 0,
            right: 0,
            background: 'white', 
            zIndex: 1000, 
            maxHeight: '300px',
            overflowY: 'auto',
          }}>
            {suggestions.map((suggestion) => (
              <ListItemButton 
   
                key={suggestion.place_id} 
                onClick={() => handleSuggestionClick(suggestion)}
                sx={{           
                  border: '3px solid black',
                  mb: 1,
                }}
              >
                <ListItemText primary={suggestion.display_name} />
              </ListItemButton>
            ))}
          </List>
        )}
      </Box> */}
    </Box>
  );
}
