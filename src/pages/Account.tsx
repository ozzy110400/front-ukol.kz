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

export default function Account() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
      account

    </Box>
  );
}
