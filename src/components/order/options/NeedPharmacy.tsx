import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface NeedPharmacyProps {}

const NeedPharmacy = (props: NeedPharmacyProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox  border-2 border-black"
          checked={currentOrder.options.isNeedPharmacy}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isNeedPharmacy: !prevOrder.options.isNeedPharmacy, // Toggle the checkbox state
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
                isNeedPharmacy: !prevOrder.options.isNeedPharmacy, // Toggle the checkbox state
              },
            }))
          }
        >
          Нужно зайти в аптеку (+1000₸)
        </button>
      </div>

      {/* Additional options for pharmacy */}
      {currentOrder.options.isNeedPharmacy && (
        <div className="ml-4 space-y-2">
          <p className="italic text-sm">
            Специалист позвонит вам когда будет в аптеке
          </p>
        </div>
      )}
    </div>
  );
};

export default NeedPharmacy;
