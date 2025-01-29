import { useEffect, useState } from 'preact/hooks';
import currentOrderAtom from '../../atoms/currentOrder';
import { useAtom } from 'jotai';

export default function AddressInput() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [address, setAddress] = useState<string>(currentOrder.address);

  const validateAddress = (address: string | undefined): boolean => {
    // Guard against undefined
    if (address == undefined) {
      return false;
    }
    return address.trim().length > 0; // If address is undefined, it returns false
  };

  useEffect(() => {
    setAddress(currentOrder.address);
  }, [currentOrder.address]);

  const [isAddressValid, setIsAddressValid] = useState<boolean>(validateAddress(address));

  // Update isAddressValid whenever the address changes
  useEffect(() => {
    setIsAddressValid(validateAddress(address));
  }, [address]);

  return (
    <div className="p-2 mx-2">
      {/* Address Field */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-black">Адрес, квартира и этаж</span>
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            const target = e.target as HTMLInputElement | null;
            if (target) {
              const newAddress = target.value;
              setIsAddressValid(validateAddress(newAddress)); // Validate the address
              setAddress(newAddress);
              setCurrentOrder((prev) => ({ ...prev, address: newAddress }));
            }
          }}
          className={`input border-2 bg-transparent text-black w-full border-black focus:border-black`}
          placeholder="Введите адрес"
        />
         {!isAddressValid && (
        <div className="label">
          <span className="label-text-alt text-error">Обязательное поле</span>
        </div>
        )}  
      </div>
    </div>
  );
}