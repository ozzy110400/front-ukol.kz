import { useState } from 'preact/hooks';
import { TextField, Box } from '@mui/material';
import currentOrderAtom from '../../atoms/currentOrder';
import { useAtom } from 'jotai';

export default function AddressInput() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [address, setAddress] = useState<string | undefined>(currentOrder.streetAndBuildingNumber);
  const [flat, setFlat] = useState<string| undefined>(currentOrder.flat);
  const [floor, setFloor] = useState<string| undefined>(currentOrder.floor);
  const [isAddressValid, setIsAddressValid] = useState<boolean>(false);
  const validateAddress = (address: string): boolean => {
    // Add your address validation logic here
    return address.trim().length > 0; // Example: valid if not empty
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Address Field */}
      <TextField
        label="Адрес"
        value={address}
        onChange={(e) => {
          const target = e.target as HTMLInputElement | null;
          if (target) {
            const newAddress = target.value;
            setIsAddressValid(validateAddress(newAddress)); // Validate the address
            setAddress(newAddress)
            setCurrentOrder((prev) => ({ ...prev, streetAndBuildingNumber: newAddress }));
          }
        }}
        variant="standard"
        fullWidth
        sx={{
          '& .MuiInputLabel-root.Mui-focused': {
            color: !isAddressValid ? 'red' :'#88e788', // Focused color of the label
          },
          '& .MuiInput-underline:before': {
            borderBottomWidth: '3px', // Thickness of the underline
            borderBottomColor: !isAddressValid ? 'red' :'darkgray',
          },
          '& .MuiInput-underline:after': {
            borderBottomWidth: '3px', // Thickness after focus
            borderBottomColor: !isAddressValid ? 'red' :'darkgray',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomWidth: '3px', // Thickness on hover
            borderBottomColor: !isAddressValid ? 'red' :'darkgray',
          },
        }}
      />

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {/* Flat Field */}
        <TextField
          label="Квартира"
          value={flat}
          onChange={(e) => {
            const target = e.target as HTMLInputElement | null;
            if (target) {
              setFlat(target.value)
              setCurrentOrder((prev) => ({ ...prev, flat: target.value }));
            }
          }}
          variant="standard"
          fullWidth
          sx={{
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'darkgray',
            },
            '& .MuiInput-underline:before': {
              borderBottomWidth: '3px',
              borderBottomColor: 'darkgray',
            },
            '& .MuiInput-underline:after': {
              borderBottomWidth: '3px',
              borderBottomColor: 'darkgray',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomWidth: '3px',
              borderBottomColor: 'darkgray',
            },
          }}
        />

        {/* Floor Field */}
        <TextField
          label="Этаж"
          value={floor}
          onChange={(e) => {
            const target = e.target as HTMLInputElement | null;
            if (target) {
              setFloor(target.value)
              setCurrentOrder((prev) => ({ ...prev, floor: target.value }));
            }
          }}
          variant="standard"
          fullWidth
          sx={{
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'darkgray',
            },
            '& .MuiInput-underline:before': {
              borderBottomWidth: '3px',
              borderBottomColor: 'darkgray',
            },
            '& .MuiInput-underline:after': {
              borderBottomWidth: '3px',
              borderBottomColor: 'darkgray',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomWidth: '3px',
              borderBottomColor: 'darkgray',
            },
          }}
        />
      </Box>
    </Box>
  );
}
