import {
  Box,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import MapComponent from '../components/Map';
import LoginModal from '../components/LoginModal';
import { serviceOptionsMap } from '../components/order-options/allOptionsMap';
import ArrivalTime from '../components/ArrivalTime';
import ServiceCardsCarousel from '../components/ServiceCardsCarousel';
import SuccesOrderModal from '../components/SuccesOrderModal';
import MainPhrase from '../components/MainPhrase';
import MapFooter from '../components/MapFooter';

export default function Main() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);


  const getOptions = () => {
    const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
    if(options.length > 0){
    return (
      <Box>
        {options.map(({ component: Component, /* props*/ }, index:number) => (
          <Component key={index} />
        ))}
      </Box>
    );
     }
  };
  
  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
      <Box sx={{ 
            border: '3px solid black', 
            margin: 2,
            position: 'relative',
            
          }}> 

          <MapComponent />
          <ServiceCardsCarousel/>
          <ArrivalTime/> 
          {getOptions()}    
          <MapFooter/>
       
      </Box>

       <MainPhrase/>
       <LoginModal />
       <SuccesOrderModal />

    </Box>
  );
}
