import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';

interface ArrivalTimeProps {}

const ArrivalTime: React.FC<ArrivalTimeProps> = () => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [activeOption, setActiveOption] = useState<'ASAP' | 'TIME'>('ASAP');


  useEffect(() => {
    const currentHour = parseInt(dayjs().format('HH'), 10);
    const isLateNight = currentHour >= 22 || currentHour < 6;

    setCurrentOrder(prevOrder => ({
      ...prevOrder,
      amount: prevOrder.amount + (isLateNight ? 1000 : 0),
      arrivalTime: {
        ...prevOrder.arrivalTime,
        isAlredyWithExtra: isLateNight,
      },
    }));
  }, [currentOrder]);

  
  const handleTimeChange = (newValue: Dayjs | null) => {
    if (newValue) {
      const hours = newValue.format('HH');
      const minutes = newValue.format('mm');
      const isLateNight = hours >= '22' || hours < '06';

      setSelectedTime(newValue);
      setCurrentOrder(prevOrder => {
        const shouldAddExtra = isLateNight && !prevOrder.arrivalTime.isAlredyWithExtra;

        return {
          ...prevOrder,
          arrivalTime: {
            ...prevOrder.arrivalTime,
            hours,
            minutes,
            isAlredyWithExtra: shouldAddExtra,
          },
          amount: prevOrder.amount + (shouldAddExtra ? 1000 : 0),
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
            border: '1px #88e788'

          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1.0rem' } }}>
          Приехать как можно раньше
          </Typography>

        </Button>
        <Button
          onClick={() => handleOptionChange('TIME')}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          style={{
            backgroundColor: activeOption === 'TIME' ? '#88e788' : 'transparent',
            border: '1px #88e788'
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1.0rem' } }}>
          Выбрать время
          </Typography>
        </Button>
      </ButtonGroup>

      {/* Display TimePicker if "Выбрать время" is selected */}
      {activeOption === 'TIME' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ mt: 2 }}>
            <TimePicker
              label="Выберите время"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </Box>
        </LocalizationProvider>
      )}
    </Box>
  );
};

export default ArrivalTime;
