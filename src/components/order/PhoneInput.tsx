import { useEffect, useState } from 'preact/hooks';
import { useAtom } from 'jotai';
import InputMask from 'react-input-mask';
import currentOrderAtom from '../../atoms/currentOrder';

// Функция для форматирования сырого номера
const formatPhone = (rawPhone: string): string => {
  if (!rawPhone) return '';
  const cleaned = rawPhone.replace(/\D/g, '');
  return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
};

export default function PhoneInput() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  
  // Инициализируем состояние с отформатированным номером
  const [phone, setPhone] = useState<string>(() => formatPhone(currentOrder.phone));

  // Синхронизируем состояние при изменении атома
  useEffect(() => {
    setPhone(formatPhone(currentOrder.phone));
  }, [currentOrder.phone]);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
  };

  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(validatePhone(phone));

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement; // Приведение типа к HTMLInputElement
    if (!target) return;
    const rawPhone = target.value.replace(/\D/g, '');
    const formattedPhone = formatPhone(rawPhone);
    
    setPhone(formattedPhone);
    setCurrentOrder(prev => ({ ...prev, phone: rawPhone }));
  };

  useEffect(() => {
    setIsPhoneValid(validatePhone(phone));
  }, [phone]);

  return (
    <div className="p-2 mx-2">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-black">Номер телефона</span>
        </label>
        <InputMask
          required
          mask="+7 (999) 999-99-99"
          value={phone}
          onChange={handlePhoneChange}
        >
          {() => (
            <input
              type="text"
              placeholder="Введите номер телефона"
              className={`input border-2 bg-transparent text-black w-full border-black focus:border-black`}
            />
          )}
        </InputMask>

        {!isPhoneValid && (
          <div className="label m-0 p-0">
            <span className="label-text-alt text-error">Неверный формат номера</span>
          </div>
        )}
      </div>
    </div>
  );
}