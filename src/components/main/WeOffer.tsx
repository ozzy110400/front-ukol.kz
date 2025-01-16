import { Box, Typography } from '@mui/material';
import conditionImg from "/img/second.png";
import { trackClarityEvent } from 'App';
import { useLocation } from 'wouter-preact';

export default function WeOffer() {
  const [, navigate] = useLocation();

  const services = [
    {
      headingText: "АНОНИМНОСТЬ",
      subText: "Ваши данные защищены. Мы гарантируем полную анонимность и конфиденциальность.",
    },
    {
      headingText: "ПРОФЕССИОНАЛИЗМ",
      subText: "Наши специалисты с многолетним опытом и сертификацией всегда готовы оказать качественную помощь.",
    },
    {
      headingText: "КОМФОРТ",
      subText: "Специалист приедет к вам в течении часа, избавив от необходимости посещать клинику.",
    }
];

  
  const services1 = [
    {
      headingText: "АНОНИМНОСТЬ",
      subText:
        "Мы гарантируем конфиденциальность и <br/> анонимность личности/информации пациентов.",
    },
    {
      headingText: "БЫСТРЫЙ ВЫЕЗД",
      subText:
        "Можем отправить Вам хорошего опытного <br/> квалифицированного специалиста <br/> минимум в течение 20 минут, максимум в <br/> течение 1 часа.",
    },
    {
      headingText: "ОПЫТНЫЕ СПЕЦИАЛИСТЫ",
      subText:
        "У каждого специалиста есть все необходимые <br/> документы подтверждающие квалификацию. <br/> Имеются удостоверение личности, диплом и <br/> сертификат специалиста.",
    },
  ];

  return (
    <section id="about" >
    <Box>
      {/* Header Section */}
      <Typography
        variant="h2"
        sx={{
          paddingTop: '15%',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: '30px',
        }}
      >
        нашим клиентам
      </Typography>

      {/* Content Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '200px', marginTop: '40px' }}>
        {/* Service Information */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {services.map((service, index) => (
              <Box
              onClick={() => {
                trackClarityEvent('redirect_from_lending_we_offer');
                navigate('/order');
              }}
              key={index}
              sx={{
                backgroundColor: 'transparent',
                border: '3px solid black',
                padding: '10px',
                mx: 4,
                borderRadius: 2,
                boxShadow: 1,
                textAlign: 'center',
              }}
              
            >
              {/* Service Heading */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '24px',
                  marginBottom: '8px',
                  textDecoration: 'underline',
                  textDecorationColor: '#88e788',
                   textDecorationThickness: '5px'
                }}
              >
                {service.headingText}
              </Typography>

              {/* Service Subtext */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: '14px',
                  marginBottom: '16px',
                }}
                dangerouslySetInnerHTML={{ __html: service.subText }}
              />
              
            </Box>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' }}}>
          <img src={conditionImg} alt="Condition Image" style={{ height: '500px' }} />
        </Box>
      </Box>
    </Box>
    </section>
  );
}
