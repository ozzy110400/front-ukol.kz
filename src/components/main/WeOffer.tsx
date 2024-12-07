import { Box, Typography } from '@mui/material';
import conditionImg from "/img/second.png";

export default function WeOffer() {
  const services = [
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
    {
      headingText: "АНОНИМНОСТЬ",
      subText:
        "Мы гарантируем конфиденциальность и <br/> анонимность личности/информации пациентов.",
    },
  ];

  return (
    <section id="about" >
    <Box>
      {/* Header Section */}
      <Typography
        variant="h6"
        sx={{
          paddingTop: '120px',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: '35px',
        }}
      >
        Мы предлагаем <br /> ЛУЧШИЕ условия
      </Typography>

      {/* Content Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '200px', marginTop: '40px' }}>
        {/* Service Information */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#88e788',
                padding: '10px',
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
                }}
              >
                {service.headingText}
              </Typography>

              {/* Service Subtext */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: '16px',
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
