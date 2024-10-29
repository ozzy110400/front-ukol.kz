import React from 'react';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';

interface NeedPharmacyProps {}

const NeedPharmacy: React.FC<NeedPharmacyProps> = () => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isNeedPharmacy}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isNeedPharmacy: !prevOrder.options.isNeedPharmacy // Toggle the checkbox state
              },
              amount: prevOrder.options.isNeedPharmacy ? Math.max(prevOrder.amount - 1000, 0) : prevOrder.amount + 1000 // Update amount accordingly
            }))
          }
        />
        <Button
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isNeedPharmacy: !prevOrder.options.isNeedPharmacy // Toggle the checkbox state
              },
              amount: prevOrder.options.isNeedPharmacy ? Math.max(prevOrder.amount - 1000, 0) : prevOrder.amount + 1000 // Update amount accordingly
            }))
          }
          sx={{
            textTransform: 'none',
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Typography variant="h3">Нужно зайти в аптеку (+1000₸)</Typography>
        </Button>
      </Box>
      {/* Additional options */}
      {currentOrder.options.isNeedPharmacy && (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1  }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '0.8rem',
                sm: '1.0rem',
                md: '1.2rem',
              },
              fontStyle: 'italic',
            }}
          >
            Специалист позвонит вам когда будет в аптеке
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default NeedPharmacy;
