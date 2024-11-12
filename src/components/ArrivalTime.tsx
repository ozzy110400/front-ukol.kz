import { useEffect, useState } from 'preact/hooks';
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import dayjs from 'dayjs';

interface ArrivalTimeProps {}

const ArrivalTime = (props: ArrivalTimeProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  
  // Set default time as current time + 1 hour
  const defaultTime = dayjs().add(1, 'hour').format('HH:mm');
  const [selectedTime, setSelectedTime] = useState<string>(defaultTime);
  const [activeOption, setActiveOption] = useState<'ASAP' | 'TIME'>('ASAP');

  // Track whether the extra 1000 amount has been added
  const [isExtraAdded, setIsExtraAdded] = useState<boolean>(false);

  useEffect(() => {
    const currentHour = parseInt(dayjs().format('HH'), 10);
    const isLateNight = currentHour >= 22 || currentHour < 6;

    setCurrentOrder(prevOrder => ({
      ...prevOrder,
      amount: prevOrder.amount! + (isLateNight ? 1000 : 0),
      arrivalTime: {
        ...prevOrder.arrivalTime,
        isAlredyWithExtra: isLateNight,
      },
    }));
    setIsExtraAdded(isLateNight);  
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      const newValue = target.value;
      setSelectedTime(newValue);
  
      const [hours, minutes] = newValue.split(':');
      const isLateNight = parseInt(hours, 10) >= 22 || parseInt(hours, 10) < 6;
  
      setCurrentOrder(prevOrder => {
        let newAmount = prevOrder.amount!;
        if (isLateNight && !isExtraAdded) {
          newAmount += 1000;
          setIsExtraAdded(true); // Mark that extra charge is now added
        } else if (!isLateNight && isExtraAdded) {
          newAmount -= 1000;
          setIsExtraAdded(false); // Remove extra charge
        }
  
        return {
          ...prevOrder,
          arrivalTime: {
            ...prevOrder.arrivalTime,
            hours,
            minutes,
            isAlredyWithExtra: isLateNight,
          },
          amount: newAmount,
        };
      });
    }
  };

  const handleOptionChange = (option: 'ASAP' | 'TIME') => {
    setActiveOption(option);
    setCurrentOrder(prevOrder => ({
      ...prevOrder,
      arrivalTime: {
        ...prevOrder.arrivalTime,
        isNearestHour: option === 'ASAP',
      },
    }));
  };

  return (
    <Box sx={{ m: 2 }}>
      <ButtonGroup
        variant="contained"
        fullWidth
        sx={{
          gap: 0,
          '& .MuiButtonGroup-grouped': {
            backgroundColor: activeOption === 'ASAP' ? '#88e7883' : 'transparent',
            '&.Mui-selected': {
              backgroundColor: '#88e788',
            },
          },
        }}
      >
        <Button
          onClick={() => handleOptionChange('ASAP')}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          style={{
            backgroundColor: activeOption === 'ASAP' ? '#88e788' : 'transparent',
            border: '1px #88e788',
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' } }}>
            Приехать как можно раньше
          </Typography>
        </Button>
        <Button
          onClick={() => handleOptionChange('TIME')}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          style={{
            backgroundColor: activeOption === 'TIME' ? '#88e788' : 'transparent',
            border: '1px #88e788',
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' } }}>
            Выбрать время
          </Typography>
        </Button>
      </ButtonGroup>

      {activeOption === 'TIME' && (
        <TextField
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
          sx={{ minWidth: '120px', mt: 2 }}
        />
      )}
    </Box>
  );
};

export default ArrivalTime;
