import { useEffect, useRef, useState, useCallback } from 'preact/hooks';
import { Box, TextField, Autocomplete, CircularProgress, IconButton } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useAtom } from 'jotai';
import debounce from 'lodash/debounce';
import currentOrderAtom from '../../atoms/currentOrder';
import { trackClarityEvent } from 'App';

export default function MapComponent() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null); // Store marker reference
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat: 43.238949, lng: 76.889709 });
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  const mapStyle = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  // Initialize the map and services
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center,
        zoom: 18,
        disableDefaultUI: true,
        styles: mapStyle,
        gestureHandling: 'greedy',
      });

      // Initialize autocomplete and geocoder services
      autocompleteServiceRef.current = new google.maps.places.AutocompleteService();
      geocoderRef.current = new google.maps.Geocoder();

      // Add custom marker at the center of the map
      markerRef.current = new google.maps.Marker({
        position: center,
        map: mapRef.current,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
          scaledSize: new google.maps.Size(40, 40),
        }, // Use the custom HTML marker directly
        draggable: true, // Allow dragging of marker
      });

      // Add event listener to update marker position when map moves
      google.maps.event.addListener(mapRef.current, 'center_changed', () => {
        if (mapRef.current) {
          const newCenter = mapRef.current.getCenter()?.toJSON();
          if (newCenter) {
            setCenter(newCenter);
            markerRef.current?.setPosition(newCenter); // Update marker position
          }
        }
      });

      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newCenter = { lat: latitude, lng: longitude };
          setCenter(newCenter);
          mapRef.current?.setCenter(newCenter);
          markerRef.current?.setPosition(newCenter); // Update marker position
        },
        (error) => console.error('Geolocation error:', error),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }

    return () => {
      if (mapRef.current) {
        google.maps.event.clearListeners(mapRef.current, 'center_changed');
      }
    };
  }, []);

  const handleMoveEnd = useCallback(async () => {
    if (geocoderRef.current && mapRef.current) {
      const center = mapRef.current.getCenter();
      if (!center) return;

      geocoderRef.current.geocode(
        { location: center.toJSON(), language: 'ru' }, // Specify the language
        (results, status) => {
          if (status === 'OK' && results?.[0]) {
            let formattedAddress = results[0].formatted_address;

            // Remove Plus Code part (if present)
            formattedAddress = formattedAddress.replace(/\+([A-Za-z0-9]+)/g, '').trim();

            setAddress(formattedAddress);
            setCurrentOrder((prev) => ({
              ...prev,
              streetAndBuildingNumber: formattedAddress,
              lat: center.lat(),
              lng: center.lng(),
            }));
            trackClarityEvent('address_entered_by_map');
          }
        }
      );
    }
  }, [setCurrentOrder]);

  // Fetch autocomplete suggestions
  const fetchSuggestions = useCallback(
    debounce((input: string) => {
      if (autocompleteServiceRef.current && input.length > 2) {
        autocompleteServiceRef.current.getPlacePredictions(
          {
            input,
            language: 'ru', // You can set the language as needed
            componentRestrictions: { country: 'KZ' }, // Restrict to Kazakhstan
          },
          (predictions, status) => {
            if (status === 'OK') {
              setSuggestions(predictions || []);
            }
          }
        );
      } else {
        setSuggestions([]);
      }
      trackClarityEvent('address_entered_by_text');
    }, 500),
    []
  );

  const handleSuggestionClick = (suggestion: google.maps.places.AutocompletePrediction) => {
    if (geocoderRef.current) {
      geocoderRef.current.geocode(
        {
          placeId: suggestion.place_id,
          language: 'ru', // You can set the language as needed
          region: 'KZ', // Restrict geocoding to Kazakhstan
        },
        (results, status) => {
          if (status === 'OK' && results?.[0]) {
            const location = results[0].geometry.location;
            const newCenter = { lat: location.lat(), lng: location.lng() };
            setCenter(newCenter);
            mapRef.current?.setCenter(newCenter);
            markerRef.current?.setPosition(newCenter); // Update marker position
            setAddress(results[0].formatted_address);
            setCurrentOrder((prev) => ({
              ...prev,
              streetAndBuildingNumber: results[0].formatted_address,
              lat: newCenter.lat,
              lng: newCenter.lng,
            }));
          }
        }
      );
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      google.maps.event.addListener(mapRef.current, 'idle', handleMoveEnd);
    }
  }, [handleMoveEnd]);

  return (
    <Box>
      <div id="map" style={{ height: '400px', width: '100%' }} />
      <IconButton
        onClick={() => {
          setIsLocationLoading(true);
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const newCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setCenter(newCenter);
              mapRef.current?.setCenter(newCenter);
              markerRef.current?.setPosition(newCenter); // Update marker position
              setIsLocationLoading(false);
            },
            (error) => {
              console.error('Error getting location:', error);
              setIsLocationLoading(false);
            }
          );
        }}
        sx={{
          position: 'absolute',
          top: 390,
          right: 12,
          backgroundColor: 'white',
          zIndex: 1000,
        }}
      >
        {isLocationLoading ? <CircularProgress size={24} /> : <NearMeIcon />}
      </IconButton>
      <Box sx={{ p: 2 }}>
        <Autocomplete
          freeSolo
          options={suggestions}
          inputValue={address}
          getOptionLabel={(option) => option.description || ''}
          onInputChange={(event, value) => {
            setAddress(value);
            fetchSuggestions(value);
          }}
          onChange={(event, selectedOption) =>
            selectedOption && handleSuggestionClick(selectedOption)
          }
          renderInput={(params) => <TextField {...params as any} label="Адрес" variant="standard" />}
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
