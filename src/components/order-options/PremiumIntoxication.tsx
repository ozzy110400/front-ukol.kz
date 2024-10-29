import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';

interface PremiumDetoxicationProps {}

const PremiumDetoxication: React.FC<PremiumDetoxicationProps> = () => {
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
              amount: prevOrder.options.isPremiumIntoxication ? Math.max(prevOrder.amount! - 30000, 0) : prevOrder.amount! + 30000 // Update amount accordingly
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
              amount: prevOrder.options.isPremiumIntoxication ? Math.max(prevOrder.amount! - 30000, 0) : prevOrder.amount! + 30000 // Update amount accordingly
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
      {/* Additional options */}
      {currentOrder.options.isPremiumIntoxication ? (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
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
            10 препаратов
          </Typography>
        </Box>
      ) :  (
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
            7 препаратов
          </Typography>
        </Box>
      )
    }
    </Box>
  );
};

export default PremiumDetoxication;
