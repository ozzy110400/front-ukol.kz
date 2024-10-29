import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { servicePriceGlobaOption } from 'helpers/default';
import ServiceCard from './ServiceCard';
import { useAtom } from 'jotai';
import currentOrderAtom from 'atoms/currentOrder';
import dayjs from 'dayjs';

interface ServiceCardsCarouselProps {}

const ServiceCardsCarousel: React.FC<ServiceCardsCarouselProps> = () => {
    const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
    const handleSelect = (title: string, amount: number) => {
        const currentHour = parseInt(dayjs().format('HH'), 10);
        const isAlredyWithExtra = (currentHour >= 22 || currentHour < 6);
        setCurrentOrder(prevOrder => (
        { ...prevOrder,
             title: title,
             amount: amount,
             options:{
                isNeedPharmacy: false,
                isHaveDoctorsAppointment: false,
                isWithDrugsCocktail: false,
                isPremiumIntoxication: false,
                isWithDressingMaterial: false,
                photo: undefined,
                daysForNurse: 0,
                message: ''  
            },
            arrivalTime: {
                hours: dayjs().format('HH'),
                minutes: dayjs().format('mm'),
                isAlredyWithExtra,
                isNearestHour: true
            },
             }));
      };
    
    return (
        <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          padding: '1rem',
          paddingTop: 0,
          '::-webkit-scrollbar': {
            height: '8px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
        }}
      >
  {servicePriceGlobaOption.map((option, index) => (
     <Button
     variant="contained"
     onClick={() => {
      handleSelect(option.title, option.price); 
     }
    }
     sx={{
       border: '1px solid black',
       padding: 0,
       minWidth: 'auto',
       display: 'flex',  // Make sure button behaves like a flex container
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'column',
       textAlign: 'center', 
     }}
   >

      <ServiceCard 
        key={option.title} 
        title={option.title} 
        price={option.price} 
        description={option.description}
        onClick={() => handleSelect(option.title, option.price)}  
        imageSrc={option.img}
        isSelected={currentOrder.title === option.title}
        />
        </Button>
    ))}

   </Box>
    );
  };

export default ServiceCardsCarousel;