import { useEffect, useState } from 'preact/hooks';
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import dayjs, { Dayjs } from 'dayjs';

interface ArrivalTimeProps {}

const ArrivalTime = (props: ArrivalTimeProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  // Default time + date
  const defaultTime = dayjs().add(1, 'hour').format('HH:mm');
  const defaultDate = dayjs();

  const [selectedTime, setSelectedTime] = useState<string>(defaultTime);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(defaultDate);
  const [activeOption, setActiveOption] = useState<'ASAP' | 'TIME'>('ASAP');
  const [isExtraAdded, setIsExtraAdded] = useState<boolean>(false);

  useEffect(() => {
    const currentHour = parseInt(dayjs().format('HH'), 10);
    const isLateNight = currentHour >= 22 || currentHour < 6;

    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      amount: prevOrder.amount! + (isLateNight ? 1000 : 0),
      arrivalTime: {
        ...prevOrder.arrivalTime,
        isAlreadyWithExtra: isLateNight,
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

    setCurrentOrder((prevOrder) => {
      let newAmount = prevOrder.amount!;
      if (isLateNight && !isExtraAdded) {
        newAmount += 1000;
        setIsExtraAdded(true);
      } else if (!isLateNight && isExtraAdded) {
        newAmount -= 1000;
        setIsExtraAdded(false);
      }

      return {
        ...prevOrder,
        arrivalTime: {
          ...prevOrder.arrivalTime,
          hours,
          minutes,
          isAlreadyWithExtra: isLateNight,
        },
        amount: newAmount,
      };
    });
  }
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      arrivalTime: {
        ...prevOrder.arrivalTime,
        date: newDate ? newDate.format('YYYY-MM-DD') : null,
      },
    }));
  };

  const handleOptionChange = (option: 'ASAP' | 'TIME') => {
    setActiveOption(option);
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      arrivalTime: {
        ...prevOrder.arrivalTime,
        isNearestHour: option === 'ASAP',
      },
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ m: 2 }}>
        <ButtonGroup
          variant="contained"
          fullWidth
          sx={{
            border: '3px solid black',
            borderRadius: '8px',
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
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' } }}
            >
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
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' } }}
            >
              Выбрать время
            </Typography>
          </Button>
        </ButtonGroup>

        {activeOption === 'TIME' && (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 , gap: 2, }}>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              sx={{ }}
              disablePast
              format="YYYY-MM-DD"
              label="Выбрать дату"
            />
            <TextField
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              sx={{ minWidth: '120px',  }}
            />
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};


export default ArrivalTime;

