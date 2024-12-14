import {
  Box,
} from '@mui/material';
import MainPhrase from '../components/main/MainPhrase';
import FAQ from '../components/main/FAQ';
import Header from 'components/main/Header';
import Help from 'components/main/Help';
import WeOffer from 'components/main/WeOffer';
import Contact from 'components/main/Contacts';

export default function Main() {
  return (
    <Box sx={{ backgroundColor: 'transparent' , justifyContent: 'center', textAlign: 'center',}}>
      <Header/>
      <MainPhrase/>
      <Help/>
      <WeOffer/>
      <FAQ/>
      <Contact/>
    </Box>
  );
}


