import { useEffect, useState } from 'preact/hooks';
import { Box, Button, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import modalsOpenAtom from '../atoms/modalsOpen';
import { authAtom }  from '../atoms/auth';
import { uploadPhoto, createOrder } from '../helpers/api';

const MapFooter = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [amount, setAmount] = useState(currentOrder.amount);
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);
  const [isPendingOrder, setIsPendingOrder] = useState(false); // Pending flag

  const handleSubmit = async () => {
    if (!auth.user) {
        setIsPendingOrder(true); // Set flag if not authenticated
        setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: true }));
    } else {
      try {
        // Photo upload if required
        if (currentOrder.options.isHaveDoctorsAppointment) {
          const formData = new FormData();
          formData.append('file', currentOrder.options.photo);
          const uploadResponse = await uploadPhoto(formData);
          // Update currentOrder with the new photoURL
          const updatedOrder = {
            ...currentOrder,
            options: {
              ...currentOrder.options,
              photoURL: uploadResponse.data.photoURL,
            },
          };
          setCurrentOrder(updatedOrder); // Update the state with the new order
          console.log(currentOrder)
          // Proceed to create the order with the updated currentOrder
          const result = await createOrder(updatedOrder);
          setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));
          console.log('Order created successfully:', result);
        } else {
          // If no photo upload is needed, create the order directly
          const result = await createOrder(currentOrder);
          setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));
          console.log('Order created successfully:', result);
        }
      } catch (error) {
        console.error('Failed to create order:', error);
      }
    }
  };

  // Effect to close the login modal and submit order if authentication succeeds
  useEffect(() => {
    if (auth.user && isPendingOrder) {
      setIsPendingOrder(false);
      setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: false }));
      handleSubmit(); // Re-attempt order submission
    }
  }, [auth.user, isPendingOrder]);

  useEffect(() => {
    setAmount(currentOrder.amount);
  }, [currentOrder]);

  return (
    <Box>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        backgroundColor: 'transparent',
      }}
    >
      <Button
        disabled
        variant="contained"
        sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          margin: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
          {amount}₸
        </Typography>
      </Button>
      <Button
        disabled={!currentOrder.title}
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          margin: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
          Заказать
        </Typography>
      </Button>
    </Box>
    </Box>
  );
};

export default MapFooter;
