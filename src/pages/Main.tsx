import {
  Box,
} from '@mui/material';
import MainPhrase from '../components/main/MainPhrase';
import FAQ from '../components/main/FAQ';
import Header from 'components/main/Header';
import ServiceCards from 'components/main/ServiceCards';
import WeOffer from 'components/main/WeOffer';
import Contact from 'components/main/Contacts';

export default function Main() {
  return (
    <Box 
      component="main" 
      sx={{ backgroundColor: 'transparent', justifyContent: 'center', textAlign: 'center' }}
      itemScope
      itemType="http://schema.org/MedicalOrganization"
    >
      <meta itemProp="name" content="Ukol.kz" />
      <meta itemProp="description" content="Профессиональные медицинские услуги на дому в Казахстане" />
      <Header/>
      <MainPhrase/>
      <ServiceCards/>
      <WeOffer/>
      <FAQ/>
      <Contact/>
    </Box>
  );
}


