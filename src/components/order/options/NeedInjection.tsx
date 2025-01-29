import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface NeedInjectionProps {}

const NeedInjection = (props: NeedInjectionProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox  border-2 border-black"
          checked={currentOrder.options.isNeedInjection}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isNeedInjection: !prevOrder.options.isNeedInjection, // Toggle the checkbox state
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
                isNeedInjection: !prevOrder.options.isNeedInjection, // Toggle the checkbox state
              },
            }))
          }
        >
          Нужен укол (+1,000₸)
        </button>
      </div>
    </div>
  );
};

export default NeedInjection;
