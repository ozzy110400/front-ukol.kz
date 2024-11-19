import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Service from "./Service";
import conditionImg from "./../assets/second.png";

export default function Condition() {
  const services = {
    0: {
      headingText: "БЫСТРЫЙ ВЫЕЗД",
      subText: "Можем отправить Вам хорошего опытного <br/> квалифицированного специалиста <br/> минимум в течение 20 минут, максимум в <br/> течение 1 часа."
    },
    1: {
      headingText: "ОПЫТНЫЕ специалисты",
      subText: "У каждого специалиста есть все необходимые <br/> документы подтверждающие квалификацию. <br/> Имеются удостоверение личности, диплом и <br/> сертификат специалиста."
    },
    2: {
      headingText: "анонимность",
      subText: "Мы гарантируем конфиденциальность и <br/> анонимность личности/информации пациентов."
    }
  };

  return (
    <Box sx={{mb: 15}}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          pt: 12,
          textAlign: 'center',
          textTransform: 'uppercase',
          fontFamily: 'Open sans',
          fontWeight: 700,
          fontSize: '35px',
        }}
      >
        Мы предлагаем <br /> ЛУЧШИЕ условия
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 24, }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, fontWeight: 700,}}>
          {Object.values(services).map((value, index) => (
            <Service key={index} headingText={value.headingText} subText={value.subText} />
          ))}
        </Box>

        <img src={conditionImg} alt="Condition" style={{ height: '500px' }} />
      </Box>
      </Box>
  );
}
