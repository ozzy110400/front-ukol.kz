import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface PremiumDetoxicationProps {}

const PremiumDetoxication = (props: PremiumDetoxicationProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);


  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox  border-2 border-black"
          checked={currentOrder.options.isPremiumIntoxication}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isPremiumIntoxication: !prevOrder.options.isPremiumIntoxication
              },
            }))
          }
        />
        <button
            className="btn btn-ghost max-w-full text-black text-lg font-bold whitespace-normal break-words"
            onClick={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isPremiumIntoxication: !prevOrder.options.isPremiumIntoxication
              },
            }))
          }
        >
         Премиум-детокс (+30,000₸)
        </button>
      </div>

        <div className="ml-4 space-y-2">
          <p className="italic text-sm text-black">
            Расширенный состав капельницы 
          </p>
        </div>
      
    </div>
  );
};

export default PremiumDetoxication;