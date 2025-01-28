import { useEffect, useState } from 'preact/hooks';
import currentOrderAtom from '../../atoms/currentOrder';
import { useAtom } from 'jotai';

export default function AddressInput() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [address, setAddress] = useState<string | undefined>(currentOrder.streetAndBuildingNumber);
  const [flat, setFlat] = useState<string | undefined>(currentOrder.flat);
  const [floor, setFloor] = useState<string | undefined>(currentOrder.floor);

  const validateAddress = (address: string | undefined): boolean => {
    // Guard against undefined
    if (address == undefined) {
      return false;
    }
    return address.trim().length > 0; // If address is undefined, it returns false
  };

  const [isAddressValid, setIsAddressValid] = useState<boolean>(validateAddress(address));

  // Update isAddressValid whenever the address changes
  useEffect(() => {
    setIsAddressValid(validateAddress(address));
  }, [address]);

  return (
    <div className="p-4">
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
              setCurrentOrder((prev) => ({ ...prev, streetAndBuildingNumber: newAddress }));
            }
          }}
          className={`input border-2 bg-transparent text-black w-full focus:border-black ${
            isAddressValid ? 'border-black' : 'border-error'
          }`}
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