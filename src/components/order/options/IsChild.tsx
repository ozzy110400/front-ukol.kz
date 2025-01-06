import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface IsChildProps {}

const IsChild = (props: IsChildProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isChild}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isChild: !prevOrder.options.isChild // Toggle the checkbox state
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
                isChild: !prevOrder.options.isChild // Toggle the checkbox state
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
          <Typography variant="h3">Пациент ребенок</Typography>
        </Button>
      </Box>
      {/* Additional options */}
      {currentOrder.options.isChild && (
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

export default IsChild;
