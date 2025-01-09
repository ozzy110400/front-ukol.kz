import {
  Box,
  Button,
  CircularProgress,
  Rating,
  TextField,
  Typography,
} from '@mui/material';
import SpecState from 'components/waiting/SpecState';
import SeccuessfulCompnents from 'components/waiting/SeccuessfulComponent';
import currentOrderAtom from '../atoms/currentOrder';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'wouter-preact';
import { checkOpenOrder, submitRating } from 'helpers/api/apiClient';
import dayjs from 'dayjs';

export default function Waiting() {

  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { order } = await checkOpenOrder();
        if (!order) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
  
    fetchOrder();
  }, []);


    if(currentOrder.status == 'waiting_rating'){
     navigate(`/rating/${currentOrder._id}`)
    }


  return (
    <Box sx={{ backgroundColor: 'transparent' , justifyContent: 'center', textAlign: 'center',}}>
      <SeccuessfulCompnents/>
      <SpecState />  
      {/* < NurseCardsList/>   */}
    </Box>
  );
}


