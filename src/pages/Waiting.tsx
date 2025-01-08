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
import { checkOrder, submitRating } from 'helpers/api/apiClient';
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
        const { order } = await checkOrder();
        if (!order) {
          console.log('we are here123123');
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
  
    fetchOrder();
  }, []);

  const handleSubmitRating = async (isOnMainButton:boolean) => {

      if (!rating && !comment && !isOnMainButton) {
        alert('Что бы оставить отзыв дайте оценку звездочками или же напишите комментарий');
        return
      }
      setIsSubmitting(true);
      try {
        await submitRating(currentOrder._id!, rating!, comment);
        setCurrentOrder({
          _id: '',
          title: '',
          streetAndBuildingNumber: '',
          flat: '',
          floor: '',
          amount: 0,
          options: {
            isChild: false,
            isNeedWoman: false,
            isNeedPharmacy: false,
            isHaveDoctorsAppointment: false,
            isWithDrugsCocktail: false,
            isPremiumIntoxication: false,
            isWithDressingMaterial: false,
            isWithMaterialsPoisoning: false,
            photoURL: '',
            photo: undefined,
            daysForNurse: 0,
            message: '',
          },
          arrivalTime: {
            hours: dayjs().format('HH'),
            minutes: dayjs().format('mm'),
            isNearestHour: true,
            date: dayjs().format('YYYY-MM-DD')
          },
          status: ''
        }); 
        navigate('/');
      } catch (error) {
        console.error('Error submitting rating:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

    if(currentOrder.status == 'waiting_rating'){
      return (
        <Box sx={{ 
          mt: '5%', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          backgroundColor: 'transparent' 
        }}>
          <Typography variant="h5">
            Как вы оцениваете работу специалиста?
          </Typography>
          
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '600px',
            gap: 3
          }}>
            <Rating
              value={rating}
              name="size-larg"
              onClick={(event) => {
                setRating(Number((event.target as HTMLInputElement).value));
              }}
              size="large"
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#88e788',
                },
                '& .MuiRating-iconHover': {
                  color: '#88e788',
                }
              }}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="Оставьте свой комментарий (необязательно)"
              value={comment}
              onChange={(e) => setComment((e.target as HTMLInputElement).value)}
              sx={{
                marginX: 2,
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#88e788',
                    borderWidth: '2px',
                  },
                }
              }}
            />
    
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              justifyContent: 'center',
              width: '100%'
            }}>
              <Button
                variant="contained"
                onClick={() => handleSubmitRating(true)}
                sx={{
                  backgroundColor: '#0000001f',
                  border: '3px solid black',
                  borderRadius: '140px',
                  margin: 2,
                  position: 'relative',
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} />
                ) : (
                  <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
                    на главную
                  </Typography>
                )}
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmitRating(false)} 
                sx={{
                  backgroundColor: '#88e788',
                  border: '3px solid black',
                  borderRadius: '140px',
                  margin: 2,
                  position: 'relative',
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} />
                ) : (
                  <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
                    отправить отзыв
                  </Typography>
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      );
    }


  return (
    <Box sx={{ backgroundColor: 'transparent' , justifyContent: 'center', textAlign: 'center',}}>
      <SeccuessfulCompnents/>
      <SpecState />  
      {/* < NurseCardsList/>   */}
    </Box>
  );
}


