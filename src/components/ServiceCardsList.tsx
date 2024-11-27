import React from 'react';
import { useAtom } from 'jotai';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Typography from '@mui/material/Typography';
import currentOrderAtom from '../atoms/currentOrder';
import { servicePriceGlobaOption } from '../helpers/default';
import dayjs from 'dayjs';

const ServiceCardsList = () => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const handleSelect = (title: string, amount: number) => {
    const currentHour = parseInt(dayjs().format('HH'), 10);
    const isAlredyWithExtra = currentHour >= 22 || currentHour < 6;

    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      title,
      amount,
      options: {
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
        isAlredyWithExtra,
        isNearestHour: true,
        date: dayjs().format('YYYY-MM-DD')
      },
    }));
  };

  return (
    <List
      sx={{
        mt: 2,
        ml: 2,
        mr: 2,
        background: 'none',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {servicePriceGlobaOption.map((option, index) => (
        <ListItem
          key={option.title}
          onClick={() => handleSelect(option.title, option.price)}
          selected={currentOrder.title === option.title}
          sx={{
            backgroundColor: currentOrder.title === option.title ? '#88e788' : 'transparent',
            color: currentOrder.title === option.title ? 'dark' : 'inherit',
            border: '3px solid black',
            borderRadius: '8px',
            marginBottom: '0.5rem',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: currentOrder.title === option.title ? '#88e788' : 'rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <ListItemText
            primary={option.title}
          />
          <ListItemSecondaryAction>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              от {option.price} ₸
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ServiceCardsList;
