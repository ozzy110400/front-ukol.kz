import { Box, TextField, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';

interface MessageProps {}

const Message= ( props: MessageProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const message = (event.target as HTMLInputElement).value;
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      options: {
        ...prevOrder.options,
        message,
      },
    }));
  };

  return (
    <Box sx={{ m: 2, mb: 1 }}>
      <Typography variant="h5" sx={{ mb: 2,

      }}>
        Опишите проблему с которой вам необходима помощь 
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4} // Define number of visible lines
        variant="outlined"
        placeholder="Введите ваше сообщение"
        value={currentOrder.options.message || ''} // Display the saved message or an empty string
        onChange={handleMessageChange}
        sx={{

          "& .MuiOutlinedInput-root": {
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: 'black',
              borderWidth: "3px",
            },
          },
         
        },
        }}
      />
    </Box>
  );
};

export default Message;
