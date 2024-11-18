import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'wouter-preact';


interface LinkToMakeOrderButtonProps {}

const LinkToMakeOrderButton= (props:LinkToMakeOrderButtonProps) => {
  const [, navigate] = useLocation(); // Use wouter's `useLocation` for navigation

  const handleButtonClick = () => {
    navigate('/order'); // Navigate to `/order`
  };

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{ 
            textTransform: 'none',
            backgroundColor: '#88e788', 
            border: '3px solid black', 
            borderRadius: '140px',
            margin: 2,
         }}
      >
        <Typography variant="h5" >
        Заказть
        </Typography>
      </Button>
    </Box>
  );
};

export default LinkToMakeOrderButton;
