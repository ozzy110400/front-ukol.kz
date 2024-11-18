import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import LinkToMakeOrderButton from './LinkToMakeOrderButton';

interface MainPhraseProps {

}

const MainPhrase = (props:MainPhraseProps) => {
    
    return (
        <Card sx={{ minWidth: 275, justifyContent: 'center', textAlign: 'center', backgroundColor: 'transparent' }} elevation={0}>
        <CardContent>
          <Typography variant="h6" component="div" sx={{ mb: '5%', fontSize: '3rem' }}>
            Ukol.kz это медицина на дом!
          </Typography>
          <LinkToMakeOrderButton/>
          <Typography variant="h5">
            Мы предоставляем квалифицированные медицинские услуги с выездом на дом!
            Стаж наших специалистов свыше 7 лет. Доверьте свое здоровье настоящим профессионалам, вам не нужно никуда ехать!
          </Typography>
         
        </CardContent>
        <CardActions sx={{ flexDirection: 'column', alignItems: 'center' }}>
        </CardActions>
      </Card>
    );
  };

export default MainPhrase;