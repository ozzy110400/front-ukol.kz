import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface NeedWomanProps {}

const NeedWoman = (props: NeedWomanProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox accent-my-green border-2 border-black"
          checked={currentOrder.options.isNeedWoman}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isNeedWoman: !prevOrder.options.isNeedWoman, // Toggle the checkbox state
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
                isNeedWoman: !prevOrder.options.isNeedWoman, // Toggle the checkbox state
              },
            }))
          }
        >
          Нужна женщина специалист
        </button>
      </div>
    </div>
  );
};

export default NeedWoman;
