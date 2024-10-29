import { Card, CardContent, Typography } from '@mui/material';

interface ServiceCardProps {
  title: string;
  price: number;
  isSelected: boolean;
  description: string;
  onClick: () => void; 
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, isSelected }) => {
    return (
      <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        border: 'none',
        width: '100%',        // Ensure card takes full width of button
        height: '70px',      // Set a fixed height for all cards
        textAlign: 'center',  // Center-align content inside the card
      }}
      elevation={0}
    >
        <CardContent
        sx={{
          backgroundColor: isSelected ? '#88e788' : 'rgba(0, 0, 0, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center', 
        }}
      >
          <Typography variant="h3" component="div"
          sx={{
            m: 2
          }}
        >
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  };

export default ServiceCard;