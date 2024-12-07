import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface DressingProps {}

const Dressing = ( props: DressingProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isWithDressingMaterial}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isWithDressingMaterial: !prevOrder.options.isWithDressingMaterial // Toggle the checkbox state
              },
            }))
          }
        />
        <Button
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isWithDressingMaterial: !prevOrder.options.isWithDressingMaterial // Toggle the checkbox state
              },
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
          <Typography variant="h3">Нужны материалы (+2000₸)</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Dressing;
