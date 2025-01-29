import { Box, TextField, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface MessageProps {}

const Message= ( props: MessageProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = (event.target as HTMLTextAreaElement).value;
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      options: {
        ...prevOrder.options,
        message,
      },
    }));
  };

  return (
    <div className="p-2 mx-2">
      <label className="text-lg text-black font-bold ">
        Что-то еще что должен знать специалист?
      </label>
      <textarea
        className="textarea textarea-bordered mt-2 bg-transparent w-full border-2 border-black p-2 resize-none focus:border-black text-black"
        placeholder="Введите ваше сообщение"
        value={currentOrder.options.message || ''}
        onChange={handleMessageChange}
        rows={2} // Set to 2 rows for the textarea
      />
    </div>
  );
};

export default Message;
