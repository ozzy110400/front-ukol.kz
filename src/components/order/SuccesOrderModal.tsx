import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@mui/material';
import modalsOpenAtom from '../..//atoms/modalsOpen';
import { useAtom } from 'jotai';


export default function SuccesOrderModal() {
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);

  
  const handleClose = () => {
    setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: false }));
  };


  return (
    <Box>
    <Dialog open={modalsOpen.isSuccesModalOpen} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'green' }}>
          Заказ успешно создан
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Как только мы подберем ближайшую и подходящую вам медсестру вы получите сообщение в WhatsApp с точным временем приезда медработника
        </Typography>
      </DialogContent>
    </Dialog>
  </Box>
  );
}
