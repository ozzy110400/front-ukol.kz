import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FaceIcon from '@mui/icons-material/Face';
import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'wouter-preact';

export default function Footer() {
  const [location, setLocation] = useLocation(); // `useLocation` hook from `wouter-preact`
  const [value, setValue] = useState(location); // Initialize with current route

  // Sync `value` state with current route
  useEffect(() => {
    setValue(location);
  }, [location]);

  // Handle navigation and state update
  const handleChange = (event: Event, newValue: string) => {
    setValue(newValue);
    setLocation(newValue); // Navigate to the new route
  };

  return (
    <BottomNavigation
      sx={{
        left: 0,
        position: 'fixed',
        bottom: 0,
        width: '100%', // Full width
        zIndex: 1000, // Ensure it's on top of other elements
        backgroundColor: '#88e788', // Optional: Adjust background color
        borderTopLeftRadius: '24px', // Round the top-left corner
        borderTopRightRadius: '24px', // Round the top-right corner
        overflow: 'hidden', // Ensures no child elements spill out of the rounded corners
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for better appearance
        borderTop:'3px solid black',
        borderLeft:'3px solid black',
        borderRight:'3px solid black'
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="/order"
        label="заказ"
        icon={<LocationOnIcon />}
        sx={{
          marginRight: '15%',
          minWidth: 56, // Override default MUI styles
          minHeight: 56,
          maxWidth: 56,
          maxHeight: 56,
          color: '#363737',
          '&.Mui-selected': {
            color: '#363737',
            borderRadius: '50%', // Circular background
          },
        }}
      />
      <BottomNavigationAction
        value="/"
        label="главная"
        icon={<VaccinesIcon />}
        sx={{
          minWidth: 56, // Override default MUI styles
          minHeight: 56,
          maxWidth: 56,
          maxHeight: 56,
          color: '#363737',
          '&.Mui-selected': {
            color: '#363737',
            borderRadius: '50%', // Circular background
          },
        }}
      />
      <BottomNavigationAction
        value="/account"
        label="кабинет"
        icon={<FaceIcon />}
        sx={{
          marginLeft: '15%',
          minWidth: 56, // Override default MUI styles
          minHeight: 56,
          maxWidth: 56,
          maxHeight: 56,
          color: '#363737',
          '&.Mui-selected': {
            color: '#363737',
            borderRadius: '50%', // Circular background
          },
        }}
      />
    </BottomNavigation>
  );
}
