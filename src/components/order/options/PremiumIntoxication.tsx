import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface PremiumDetoxicationProps {}

const PremiumDetoxication= (props:PremiumDetoxicationProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isPremiumIntoxication}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isPremiumIntoxication: !prevOrder.options.isPremiumIntoxication // Toggle the checkbox state
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
                isPremiumIntoxication: !prevOrder.options.isPremiumIntoxication // Toggle the checkbox state
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
          <Typography variant="h3">Премиальная детоксикация (+3 препарата)</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default PremiumDetoxication;
