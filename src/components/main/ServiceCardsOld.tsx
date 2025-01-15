import { Box, Typography, Button, CircularProgress } from '@mui/material';
import SyringeIcon from '/img/syringe-icon.svg';
import DropletIcon from '/img/droplet-icon.svg';
import BedIcon from '/img/bed-solid.svg';
import UtensilsIcon from '/img/utensils-solid.svg';
import StethoscopeIcon from '/img/stethoscope-solid.svg';
import UserAltIcon from '/img/user-alt-solid.svg';
import HandHoldingHeartIcon from '/img/hand-holding-heart-solid.svg';
import CocktailIcon from '/img/cocktail-solid.svg';
import PillsIcon from '/img/pills-solid.svg';
import BandAidIcon from '/img/bandage-solid.svg';
import { useLocation } from 'wouter-preact';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';
import { trackClarityEvent } from 'App';
import { TOrder } from 'atoms/currentOrder';


const ServiceCards = () => {
  const [, navigate] = useLocation();
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);


  const serviceDescriptions = [
    { title: 'Уколы на дому', short_name: 'Укол', msg:'', description: 'Удобные и безопасные инъекции прямо у вас дома.', icon: SyringeIcon },
    { title: 'Капельницы на дому', short_name: 'Капельница', msg:'', description: 'Эффективное лечение капельницами в уютной домашней обстановке.', icon: DropletIcon },
 // { title: 'Удобство и комфорт', short_name: 'Другое', msg:'Нужен присмотр от медспециалиста', description: 'Ваше здоровье в центре внимания.', icon: BedIcon },
    { title: 'Пищевые отравления', short_name: 'Капельница', msg:'У меня пищевое отправление, нужна помощь', description: 'Быстрая помощь при пищевых отравлениях. При необходимости капельница.', icon: UtensilsIcon },
    { title: 'Желудочные зонды', short_name: 'Другое',  msg:'Нужно сделать желудочный зонд', description: 'Профессиональное введение желудочных зондов.', icon: StethoscopeIcon },
    { title: 'Уход за пожилыми на дому', short_name: 'Другое', msg:'Нужен уход за пожилым человеком',  description: 'Чуткий и заботливый уход за пожилыми людьми.', icon: UserAltIcon },
    { title: 'Бережные процедуры', short_name: 'Другое', msg:'Нужно помочь сделать ...', description: 'Аккуратный и безопасный уход.', icon: HandHoldingHeartIcon },
    { title: 'Коктейли', short_name: 'Другое', msg:'Мне нужнен коктейль ...', description: 'Золушка (Синдерелла), Коктейли для Спортсменов, Лаеннек (Laennec) — Плацентарная терапия', icon: CocktailIcon },
    { title: 'Вывод из запоя на дому', short_name: 'Детоксикация', msg:'Нужно вывести человека из запоя', description: 'Капельница от интоксикации, Детокс терапия, Дезинтоксикация', icon: PillsIcon },
    { title: 'Перевязки', short_name: 'Другое', msg:'Нужна помощь с перевязкой', description: 'Качественные перевязочные процедуры.', icon: BandAidIcon },
  ];

  const handleCardClick = (shortName: string, msg: string) => {    // Set the current order details in the atom or context if needed
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      title: shortName,
      options: {
        ...prevOrder.options,
        message: msg,
      },
    }));

    trackClarityEvent('redirect_from_lending_we_help')

    navigate('/order');
  };

  return (
    <section id="services" >

    <Box sx={{ backgroundColor: 'transparent',  }}>
      {/* Header Section */}
      <Typography
        variant="h1"
        sx={{
          paddingTop: '80px',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize:'30px' ,
          marginBottom: '40px',
        }}
      >
        Услуги и цены
      </Typography>

      {/* Service Cards Section */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {serviceDescriptions.map((service, index) => (
          <Box
            key={index}
            onClick={() => handleCardClick(service.short_name, service.msg)}
            sx={{
              backgroundColor: 'transparent',
              border: '3px solid black',
              borderRadius: 2,
              textAlign: 'center',
              mx: 2,
              padding: 1,
              width: '400px',
              transition: 'transform 0.3s ease',
              position: 'relative', // Set position to relative for button positioning

            }}
          >
            <Box
              component="img"
              src={service.icon}
              alt={service.title}
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography variant="h6" sx={{ fontSize: '25px', fontWeight: 700 }}>
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: '16px',fontWeight: 800, color: '#555' }}>{service.description}</Typography> 
            <Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'end',
                padding: 0,
                backgroundColor: 'transparent',
              }}
            >
              
              <Typography variant="h5" sx={{ mt:2, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
                 цена от {123}₸
                </Typography>
              
              <Button
                variant="contained"
                //onClick={handleSubmit}
                sx={{
                  backgroundColor: '#88e788',
                  border: '2px solid black',
                  borderRadius: '140px',
                  mt: 2,
                  position: 'relative',
                }}
              >
          
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
              Заказать
            </Typography>
        
        </Button>
      </Box>
    </Box>
          </Box>
          
          
        ))}
      </Box>
      

    </Box>
    </section>
  );
};

export default ServiceCards;
