import {
  Box,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';

export default function Account() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
      account

    </Box>
  );
}
