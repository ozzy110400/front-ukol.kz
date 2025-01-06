import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface NeedWomanProps {}

const NeedWoman = (props: NeedWomanProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isNeedWoman}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isNeedWoman: !prevOrder.options.isNeedWoman // Toggle the checkbox state
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
                isNeedWoman: !prevOrder.options.isNeedWoman // Toggle the checkbox state
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
          <Typography variant="h3">Нужна женщина специалист</Typography>
        </Button>
      </Box>
       {/* Additional options */}
       {currentOrder.options.isNeedWoman && (
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
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default NeedWoman;
