import { useState } from 'preact/hooks';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from '@mui/material';
import { useAtom } from 'jotai';
import { authAtom } from '../../atoms/auth';
import modalsOpenAtom from '../../atoms/modalsOpen';
import InputMask from 'react-input-mask';
import { authPhone, verifyCode } from '../../helpers/api';



export default function LoginModal() {
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);
  const [phone, setPhone] = useState('');
  const [isPolicyChecked, setIsPolicyChecked] = useState(false); // Track checkbox state

  
  const [codeMessage, setCodeMessage] = useState({
    message: 'Код отправлен на WhatsApp по указаному номеру',
    hasError: false,
  });

  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const [timer, setTimer] = useState(0); // Countdown timer
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Button disable state

  const handleClose = () => {
    setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: false }));
  };


  const handleSubmit = async (inputCode: string) => {
    const formattedPhone = formatPhoneNumber(phone);
    try {
      const response = await verifyCode(formattedPhone, inputCode);
       setAuthValue({
          user: response.user,
       }
     )
     localStorage.setItem('accessToken', response.accessToken);
     
    } catch (error) {
      if (error.status === 401) {
        setCodeMessage({
          message: 'Неверный код',
          hasError: true,
        });
      }
      console.error('Failed to verify code:', error);
    }
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCode = (event.target as HTMLInputElement).value; 
    setCode(inputCode);
    if (/^\d{5}$/.test(inputCode)) {
      handleSubmit(inputCode);
    } else {
      setCodeMessage({
        message: 'Код отправлен на WhatsApp по указаному номеру',
        hasError: false,
      });
    }
  };

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, ''); 
  };

  const handleSendCode = async () => {
    const formattedPhone = formatPhoneNumber(phone);
    try {
      const result = await authPhone(formattedPhone);
      console.log('Code sent:', result);
      setIsCodeSent(true);

      // Start 30-second timer
      setIsButtonDisabled(true);
      setTimer(30);
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setIsButtonDisabled(false); // Re-enable button after countdown
            setIsCodeSent(false)
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Failed to send code:', error);
    }
    window.clarity("set", "phone_entered", { phone: formattedPhone });
  };

  return (
    <Box>
    <Dialog open={modalsOpen.isLoginModalOpen} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Авторизация
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
            backgroundColor: 'transparent',
          }}
        >
          {/* Display success message instead of fields if authenticated */}
          {authValue!.user ? (
            <Typography variant="h5" sx={{ textAlign: 'center', color: 'green' }}>
              Вы успешно авторизировались. Можете закрыть окно это. 
            </Typography>
          ) : (
            <>
            

              <Box sx={{ mt: '2%', alignItems: 'center' }}>
                <InputMask
                  required
                  mask="+7 (999) 999-9999"
                  value={phone}
                  onChange={(event) => setPhone((event.target as HTMLInputElement).value)}
                  disabled={isCodeSent}
                >
                  {() => (
                    <TextField
                      label="Номер телефона"
                      variant="standard"
                      fullWidth
                      disabled={isCodeSent}
                    />
                  )}
                </InputMask>


                <FormControlLabel
                    control={
                      <Checkbox
                        checked={isPolicyChecked}
                        onChange={(e) => setIsPolicyChecked((e.target as HTMLInputElement).checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Согласен(а) с политикой конфиденциальности и договором оферты
                      </Typography>
                    }
                  />

                   <Button
                    variant="contained"
                    onClick={handleSendCode}
                    sx={{
                      backgroundColor: '#88e788',
                      border: '3px solid black',
                      borderRadius: '140px',
                      marginTop: 2,
                    }}
                    disabled={!isPolicyChecked || isCodeSent || isButtonDisabled}
                  >
                    <Typography variant="h5">
                      {isButtonDisabled ? `Повтор через ${timer} сек` : 'Получить код'}
                    </Typography>
                  </Button>
              </Box>

              {isCodeSent && (
                <Box sx={{ mt: 4 }}>
                  <TextField
                    label="Введите код"
                    variant="standard"
                    fullWidth
                    value={code}
                    error={codeMessage.hasError}
                    onChange={handleCodeChange}
                    inputProps={{ maxLength: 5, pattern: '[0-9]*', inputMode: 'numeric' }}
                    helperText={codeMessage.message}
                  />
                </Box>
              )}
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  </Box>
  );
}
