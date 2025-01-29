import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface DressingProps {}

const Dressing = ( props: DressingProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox  border-2 border-black"
          checked={currentOrder.options.isWithDressingMaterial}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isWithDressingMaterial: !prevOrder.options.isWithDressingMaterial, // Toggle the checkbox state
              },
            }))
          }
        />
        <button
          className="btn btn-ghost text-black text-lg font-bold"
          onClick={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isWithDressingMaterial: !prevOrder.options.isWithDressingMaterial, // Toggle the checkbox state
              },
            }))
          }
        >
          Нужны материалы (+2,000₸)
        </button>
      </div>
    </div>
  );
};

export default Dressing;
