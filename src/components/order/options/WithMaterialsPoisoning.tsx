import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface WithMaterialsPoisoningProps {}

const WithMaterialsPoisoning = (props: WithMaterialsPoisoningProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox  border-2 border-black"
          checked={currentOrder.options.isWithMaterialsPoisoning}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isWithMaterialsPoisoning: !prevOrder.options.isWithMaterialsPoisoning, // Toggle the checkbox state
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
                isWithMaterialsPoisoning: !prevOrder.options.isWithMaterialsPoisoning, // Toggle the checkbox state
              },
            }))
          }
        >
          Нужны препараты (+5,000₸)
        </button>
      </div>
    </div>
  );
};

export default WithMaterialsPoisoning;
