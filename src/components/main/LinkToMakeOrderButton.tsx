import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'wouter-preact';

interface LinkToMakeOrderButtonProps {}

const LinkToMakeOrderButton = (props: LinkToMakeOrderButtonProps) => {
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 54px 55px, rgba(0, 0, 0, 0.15) 0px -12px 30px, rgba(0, 0, 0, 0.15) 0px 4px 6px, rgba(0, 0, 0, 0.20) 0px 12px 13px, rgba(0, 0, 0, 0.11) 0px -3px 5px',
          },
        }}
      >
        <Typography variant="h5" >
          Нажмите на меня для заказа
        </Typography>
      </Button>
    </Box>
  );
};

export default LinkToMakeOrderButton;
