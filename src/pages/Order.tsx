import {
  Box,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import MapComponent from '../components/MapNew';
import LoginModal from '../components/LoginModal';
import { serviceOptionsMap } from '../components/order-options/allOptionsMap';
import ArrivalTime from '../components/ArrivalTime';
import ServiceCardsCarousel from '../components/ServiceCardsCarousel';
import SuccesOrderModal from '../components/SuccesOrderModal';
import MainPhrase from '../components/MainPhrase';
import MapFooter from '../components/MapFooter';

export default function Map() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const getOptions = () => {
    const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
    
    return (
      <Box>
        {options.map(({ component: Component, /* props*/ }, index:number) => (
          <Component key={index} />
        ))}
      </Box>
    );
  };
  
  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
      <Typography sx={{ 
        mb: 1,
        fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' }, 
        fontWeight: '1500',
        textAlign: 'center', // Center the text for better alignment
       
      }}>
        Обратите внимание! Препараты, материалы и другие расходники не входят в стоимость услуг
      </Typography>
      <MapComponent />

          <ServiceCardsCarousel/>
          <ArrivalTime/> 
          {getOptions()}    
          <MapFooter/>
       
       <LoginModal />
       <SuccesOrderModal />

    </Box>
  );
}
