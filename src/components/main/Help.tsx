import { Box, Typography, Button } from '@mui/material';
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

const Help = () => {
  const serviceDescriptions = [
    { title: 'Уколы на дому', description: 'Удобные и безопасные инъекции прямо у вас дома.', icon: SyringeIcon },
    { title: 'Капельницы на дому', description: 'Эффективное лечение капельницами в уютной домашней обстановке.', icon: DropletIcon },
    { title: 'Удобство и комфорт', description: 'Ваше здоровье в центре внимания.', icon: BedIcon },
    { title: 'Пищевые отравления', description: 'Быстрая помощь при пищевых отравлениях.', icon: UtensilsIcon },
    { title: 'Желудочные зонды', description: 'Профессиональное введение желудочных зондов.', icon: StethoscopeIcon },
    { title: 'Уход за пожилыми на дому', description: 'Чуткий и заботливый уход за пожилыми людьми.', icon: UserAltIcon },
    { title: 'Бережные процедуры', description: 'Аккуратный и безопасный уход.', icon: HandHoldingHeartIcon },
    { title: 'Коктейли', description: 'Золушка (Синдерелла), Коктейли для Спортсменов, Лаеннек (Laennec) — Плацентарная терапия', icon: CocktailIcon },
    { title: 'Вывод из запоя на дому', description: 'Капельница от интоксикации, Детокс терапия, Дезинтоксикация', icon: PillsIcon },
    { title: 'Перевязки', description: 'Качественные перевязочные процедуры.', icon: BandAidIcon },
  ];

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
        Вот с чем мы <br />можем помочь
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
            sx={{
              backgroundColor: 'transparent',
              borderRadius: 2,
              textAlign: 'center',
              padding: 1,
              width: '400px',
              transition: 'transform 0.3s ease',
            }}
          >
            <Box
              component="img"
              src={service.icon}
              alt={service.title}
              sx={{
                width: 40,
                height: 40,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography variant="h6" sx={{ fontSize: '25px', fontWeight: 700 }}>
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: '16px',fontWeight: 800, color: '#555' }}>{service.description}</Typography>
          </Box>
        ))}
      </Box>

    </Box>
    </section>
  );
};

export default Help;
