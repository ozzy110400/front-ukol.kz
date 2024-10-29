import React from 'react';
import { Box, Button,Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';


interface WithDrugsCocktailProps {
}

const WithDrugsCocktail: React.FC<WithDrugsCocktailProps> = () => {
    const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

    return (
        <Box sx={{ m: 2, mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox 
            checked={currentOrder.options.isWithDrugsCocktail}
            onClick={() => 
                setCurrentOrder(prevOrder => ({
                  ...prevOrder,
                  options: { // Update the nested options object
                    ...prevOrder.options,
                    isWithDrugsCocktail: !prevOrder.options.isWithDrugsCocktail 
                  },
                  amount: prevOrder.options.isWithDrugsCocktail ? Math.max(prevOrder.amount - 8000, 0) : prevOrder.amount + 8000 // Update amount accordingly
                }))
              }
            />
            <Button
             onClick={() => 
                setCurrentOrder(prevOrder => ({
                  ...prevOrder,
                  options: { // Update the nested options object
                    ...prevOrder.options,
                    isWithDrugsCocktail: !prevOrder.options.isWithDrugsCocktail 
                  },
                  amount: prevOrder.options.isWithDrugsCocktail ? Math.max(prevOrder.amount - 8000, 0) : prevOrder.amount + 8000 // Update amount accordingly
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
                <Typography variant="h3">Нужны препараты</Typography>
            </Button>
            </Box>
        {/* Upload button section */}
        {currentOrder.options.isWithDrugsCocktail && (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1  }}>

            <Typography variant="h1"
            sx={{
                fontSize: {
                    xs: '0.8rem',   
                    sm: '1.0rem',     
                    md: '1.2rem',  
                },
                fontStyle: 'italic', 
            }}> Медсестра придет со своими препаратами для коктейля 
            </Typography>
            </Box>    
        )}
        
    </Box>    
    );
};

export default WithDrugsCocktail