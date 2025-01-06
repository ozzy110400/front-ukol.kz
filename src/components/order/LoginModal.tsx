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
  CircularProgress,
} from '@mui/material';
import { useAtom } from 'jotai';
import { authAtom } from '../../atoms/auth';
import modalsOpenAtom from '../../atoms/modalsOpen';
import InputMask from 'react-input-mask';
import { authPhone, verifyCode } from '../../helpers/api/apiClient';
import { trackClarityEvent } from 'App';

export default function LoginModal() {
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);
  const [phone, setPhone] = useState('');
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [codeMessage, setCodeMessage] = useState({
    message: 'Код отправлен на WhatsApp по указаному номеру',
    hasError: false,
  });
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Loading states
  const [isGetCodeLoading, setIsGetCodeLoading] = useState(false);
  const [isSubmitCodeLoading, setIsSubmitCodeLoading] = useState(false);

  const handleClose = () => {
    setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: false }));
  };

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  const handleSendCode = async () => {
    setIsGetCodeLoading(true); // Show loader
    const formattedPhone = formatPhoneNumber(phone);
    try {
      await authPhone(formattedPhone);
      setIsCodeSent(true);
      setIsButtonDisabled(true);
      setTimer(30);

      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setIsButtonDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Failed to send code:', error);
    } finally {
      setIsGetCodeLoading(false); // Hide loader
    }
    trackClarityEvent('phone_entered');
  };

  const handleCodeSubmit = async () => {
    setIsSubmitCodeLoading(true); // Show loader
    if (/^\d{5}$/.test(code)) {
      const formattedPhone = formatPhoneNumber(phone);
      try {
        const response = await verifyCode(formattedPhone, code);
        setAuthValue({
          user: response.user,
        });
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
    } else {
      setCodeMessage({
        message: 'Код должен состоять из 5 цифр',
        hasError: true,
      });
    }
    setIsSubmitCodeLoading(false); // Hide loader
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode((event.target as HTMLInputElement).value);
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
                <Box sx={{ mt: '2%', alignItems: 'center' }}>
                  <InputMask
                    required
                    mask="+7 (999) 999-9999"
                    value={phone}
                    onChange={(event) => setPhone((event.target as HTMLInputElement).value)}
                    disabled={isButtonDisabled || isGetCodeLoading}
                  >
                    {() => (
                      <TextField
                        label="Номер телефона"
                        variant="standard"
                        fullWidth
                        disabled={isButtonDisabled || isGetCodeLoading}
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
                    disabled={!isPolicyChecked || isButtonDisabled || isGetCodeLoading}
                  >
                    {isGetCodeLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      <Typography variant="h5">
                        {isButtonDisabled ? `Повтор через ${timer} сек` : 'Получить код'}
                      </Typography>
                    )}
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
                    <Button
                      variant="contained"
                      onClick={handleCodeSubmit}
                      sx={{
                        backgroundColor: '#88e788',
                        border: '3px solid black',
                        borderRadius: '140px',
                        marginTop: 2,
                      }}
                      disabled={isSubmitCodeLoading}
                    >
                      {isSubmitCodeLoading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <Typography variant="h5">Отправить</Typography>
                      )}
                    </Button>
                  </Box>
                )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
