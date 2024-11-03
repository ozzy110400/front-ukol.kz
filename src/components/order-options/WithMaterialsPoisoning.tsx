import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';

interface WithMaterialsPoisoningProps {}

const WithMaterialsPoisoning = ( props: WithMaterialsPoisoningProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isWithMaterialsPoisoning}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isWithMaterialsPoisoning: !prevOrder.options.isWithMaterialsPoisoning // Toggle the checkbox state
              },
              amount: prevOrder.options.isWithMaterialsPoisoning ? Math.max(prevOrder.amount! - 5000, 0) : prevOrder.amount! + 5000 // Update amount accordingly
            }))
          }
        />
        <Button
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isWithMaterialsPoisoning: !prevOrder.options.isWithMaterialsPoisoning // Toggle the checkbox state
              },
              amount: prevOrder.options.isWithMaterialsPoisoning ? Math.max(prevOrder.amount! - 5000, 0) : prevOrder.amount! + 5000 // Update amount accordingly
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
          <Typography variant="h3">Нужны препараты (+5000₸)</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default WithMaterialsPoisoning;
