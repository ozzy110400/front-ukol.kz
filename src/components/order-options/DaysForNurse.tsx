import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';

interface DaysForNurseProps {}

const DaysForNurse = (props: DaysForNurseProps)  => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  
  const handleDaysChange = (event: SelectChangeEvent<number>) => {
    const target = event.target as HTMLInputElement;
    const selectedDays = target.value as unknown as number;
    setCurrentOrder(prevOrder => ({
      ...prevOrder,
      options: {
        ...prevOrder.options,
        daysForNurse: selectedDays, // Update the selected number of days in options
      },
      amount: selectedDays * 20000, // Multiply amount based on the selected days (assuming 5000 per day)
    }));
  };

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Количество смен на которые вам необходима медсестр. 1 смена = 12 часов
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Количество смен</InputLabel>
        <Select
          value={currentOrder.options.daysForNurse || ''}
          onChange={handleDaysChange}
          label="Количество смен"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <MenuItem key={day} value={day} >
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DaysForNurse;
