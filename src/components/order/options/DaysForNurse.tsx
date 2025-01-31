import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';
import { ChangeEvent } from 'react';

const DaysForNurse = () => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const handleDaysChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    const selectedDays = target.value as unknown as number;
    setCurrentOrder(prevOrder => ({
      ...prevOrder,
      options: {
        ...prevOrder.options,
        daysForNurse: selectedDays,
      },
      amount: selectedDays * 20000,
    }));
  };

  return (
    <div className="p-2 mx-2">      
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-black t">Количество смен (1 смена = 8 часов)</span>
        </label>
        <select
          value={currentOrder.options.daysForNurse ?? ''}
          onChange={handleDaysChange}
          className="select select-bordered w-full text-lg text-black bg-white border-black border-2 focus:border-black"
        >
          <option disabled value="">Выберите количество</option>
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <option key={day} value={day}>
              {day} смен
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DaysForNurse;

