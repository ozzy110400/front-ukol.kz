import { useState, useEffect } from 'preact/hooks';
import { useAtom } from 'jotai';
import { authAtom } from '../../atoms/auth';
import modalsOpenAtom from '../../atoms/modalsOpen';
import InputMask from 'react-input-mask';
import { authPhone, verifyCode } from '../../helpers/api/apiClient';
import { trackClarityEvent } from 'App';
import currentOrderAtom from 'atoms/currentOrder';
import PhoneInput from './PhoneInput';

const formatPhone = (rawPhone: string): string => {
  if (!rawPhone) return '';
  const cleaned = rawPhone.replace(/\D/g, '');
  return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
};



export default function LoginModal() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);
  const [phone, setPhone] = useState<string>(formatPhone(currentOrder.phone));
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [codeMessage, setCodeMessage] = useState({
    message: 'Код отправлен на WhatsApp по указаному номеру',
    hasError: false,
  });
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
  };
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(validatePhone(phone));

  const [isGetCodeLoading, setIsGetCodeLoading] = useState(false);
  const [isSubmitCodeLoading, setIsSubmitCodeLoading] = useState(false);

  const handleClose = () => {
    setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: false }));
  };

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, '');
  };
 

  useEffect(() => {
    const formattedPhone = formatPhone(currentOrder.phone);
    setPhone(formattedPhone);
    setIsPhoneValid(validatePhone(formattedPhone)); // Добавлено обновление валидации
  }, [currentOrder.phone]);

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
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement; // Приведение типа к HTMLInputElement
    if (!target) return;
    const rawPhone = target.value.replace(/\D/g, '');
    const formattedPhone = formatPhone(rawPhone);
    
    setPhone(formattedPhone);
    setCurrentOrder(prev => ({ ...prev, phone: rawPhone }));
    setIsPhoneValid(validatePhone(formattedPhone));
  };

  return (
    <div class={`modal ${modalsOpen.isLoginModalOpen ? 'modal-open' : ''}`}>
      <div class="modal-box w-full max-w-md bg-my-white relative">
        {/* Close tick icon */}
        <button className="btn btn-sm btn-circle text-black btn-ghost absolute right-2 top-2"
         onClick={handleClose}>
          ✕
          </button>
        <p class="text-center text-black text-lg font-semibold">После подтверждения номера телефона заказ будет создан автоматически</p>
        
         <div class="mt-4">
          <InputMask
            required
            mask="+7 (999) 999-9999"
            value={phone}
            onChange={handlePhoneChange}
            disabled={isButtonDisabled || isGetCodeLoading}
          >
            {() => (
              <input
                type="text"
                placeholder="Номер телефона"
                className={`input border-2 bg-transparent text-black w-full border-black focus:border-black`}
                disabled={isButtonDisabled || isGetCodeLoading}
              />
            )}
          </InputMask>
          <label class="label cursor-pointer flex items-center mt-2">
            <input
              type="checkbox"
              checked={isPolicyChecked}
              onChange={(e) => setIsPolicyChecked((e.target as HTMLInputElement).checked)}
              class="checkbox  border-2 border-black"
            />
            <span class="ml-2 text-sm text-black">
              Согласен(а) с политикой конфиденциальности и договором оферты
            </span>
          </label>
          <button
            class={`btn ${isButtonDisabled || isGetCodeLoading ? 'btn-disabled' : 'bg-my-green'} text-black text-xl btn-ghost w-full mt-4`}
            onClick={handleSendCode}
            disabled={!isPolicyChecked || isButtonDisabled || isGetCodeLoading || !isPhoneValid}
          >
            {isGetCodeLoading ? (
              <div class="loading loading-spinner loading-sm"></div>
            ) : (
              <span className="text-black">{isButtonDisabled ? `Повтор через ${timer} сек` : 'Получить код'}</span>
            )}
          </button>
        </div> 

        {isCodeSent && (
          <div class="mt-4">
            <input
              type="text"
              placeholder="Введите код"
              class={`input input-bordered w-full ${codeMessage.hasError ? 'input-error' : ''}`}
              value={code}
              onChange={handleCodeChange}
              pattern="[0-9]*"
              inputMode="numeric"
            />
            <p class={`text-sm ${codeMessage.hasError ? 'text-error' : 'text-gray-500'}`}>
              {codeMessage.message}
            </p>
            <button
              class={`btn ${isSubmitCodeLoading ? 'btn-disabled' : 'btn-success'} w-full mt-4`}
              onClick={handleCodeSubmit}
              disabled={isSubmitCodeLoading}
            >
              {isSubmitCodeLoading ? (
                <div class="loading loading-spinner loading-sm"></div>
              ) : (
                <span>Отправить</span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

