import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface IsChildProps {}

const IsChild = (props: IsChildProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox  border-2 border-black"
          checked={currentOrder.options.isChild}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isChild: !prevOrder.options.isChild, // Toggle the checkbox state
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
                isChild: !prevOrder.options.isChild, // Toggle the checkbox state
              },
            }))
          }
        >
          Пациент ребенок
        </button>
      </div>
    </div>
  );
};

export default IsChild;
