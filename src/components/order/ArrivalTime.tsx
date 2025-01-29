import { useEffect, useState } from 'preact/hooks';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';
import dayjs, { Dayjs } from 'dayjs';


export default function ArrivalTime() {

  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const defaultTime = dayjs().add(1, 'hour').format('HH:mm');
  const defaultDate = dayjs();

  const [selectedTime, setSelectedTime] = useState<string>(defaultTime);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(defaultDate);
  const [activeOption, setActiveOption] = useState<'ASAP' | 'TIME'>('ASAP');
  const [isExtraAdded, setIsExtraAdded] = useState<boolean>(false);

  useEffect(() => {
    const currentHour = parseInt(dayjs().format('HH'), 10);
    const isLateNight = currentHour >= 20 || currentHour < 7;
    
    setCurrentOrder(prev => ({
      ...prev,
      arrivalTime: { ...prev.arrivalTime }
    }));
    setIsExtraAdded(isLateNight);
  }, []);

  const handleTimeChange = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value;
    setSelectedTime(newValue);

    const [hours, minutes] = newValue.split(':');
    const isLateNight = parseInt(hours, 10) >= 20 || parseInt(hours, 10) < 7;

    setCurrentOrder(prev => {
      if (isLateNight && !isExtraAdded) {
        setIsExtraAdded(true);
      } else if (!isLateNight && isExtraAdded) {
        setIsExtraAdded(false);
      }

      return {
        ...prev,
        arrivalTime: {
          ...prev.arrivalTime,
          hours,
          minutes,
        },
      };
    });
  };

  const handleDateChange = (e: Event) => {
    const newDate = dayjs((e.target as HTMLInputElement).value);
    setSelectedDate(newDate);
    
    setCurrentOrder(prev => ({
      ...prev,
      arrivalTime: {
        ...prev.arrivalTime,
        date: newDate.format('YYYY-MM-DD'),
      },
    }));
  };

  const handleOptionChange = (option: 'ASAP' | 'TIME') => {
    setActiveOption(option);
    setCurrentOrder(prev => ({
      ...prev,
      arrivalTime: {
        ...prev.arrivalTime,
        isNearestHour: option === 'ASAP',
      },
    }));
  };

  return (
    <div className="m-4">
      <div className="join join-horizontal w-full  rounded-lg">
        <button
          onClick={() => handleOptionChange('ASAP')}
          className={`join-item btn flex-1 text-black text-lg font-bold ${
            activeOption === 'ASAP' ? 'bg-my-green' : 'bg-transparent'
          }`}
        >
          <h3 className="text-sm sm:text-base md:text-lg">
            Приехать как можно раньше
          </h3>
        </button>
        
        <button
          onClick={() => handleOptionChange('TIME')}
          className={`join-item btn flex-1  text-black text-lg font-bold ${
            activeOption === 'TIME' ? 'bg-my-green' : 'bg-transparent'
          }`}
        >
          <h3 className="text-sm sm:text-base md:text-lg">
            Выбрать время
          </h3>
        </button>
      </div>

      {activeOption === 'TIME' && (
        <div className="flex flex-row items-center mt-4 gap-2">
          <input
            type="date"
            className="input input-bordered w-full max-w-xs bg-transparent text-white border-1 border-white focus:border-white filter invert"
            value={selectedDate.format('YYYY-MM-DD')}
            onChange={handleDateChange}
            min={dayjs().format('YYYY-MM-DD')}
          />
          
          <input
            type="time"
            className="input input-bordered bg-transparent text-white border-1 border-white focus:border-white filter invert"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>
      )}
    </div>
  );
};
