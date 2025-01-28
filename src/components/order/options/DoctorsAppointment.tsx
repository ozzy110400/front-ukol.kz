import { useRef, useState } from 'preact/hooks';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../../atoms/currentOrder';

interface DoctorsAppointmentProps {}

const DoctorsAppointment = (props: DoctorsAppointmentProps) => {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const fileInputRef = useRef<HTMLInputElement>(null); // Use ref to access the hidden input
  const [fileName, setFileName] = useState('');


  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement; // Cast event.target as HTMLInputElement
    const file = target.files?.[0];
    if (file) {
      console.log('Uploaded file:', file);
      setFileName(file.name);
      setCurrentOrder(prevOrder => ({
        ...prevOrder,
        options: {
          ...prevOrder.options,
          photo: file, // Save the uploaded file in the state
        },
      }));
    }
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the hidden input click
    }
  };
  return (
    <div className="p-2 mx-2">
      {/* Checkbox Section */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox border-2 border-black"
          checked={currentOrder.options.isHaveDoctorsAppointment}
          onChange={() =>
            setCurrentOrder((prevOrder) => ({
              ...prevOrder,
              options: {
                ...prevOrder.options,
                isHaveDoctorsAppointment: !prevOrder.options.isHaveDoctorsAppointment,
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
                isHaveDoctorsAppointment: !prevOrder.options.isHaveDoctorsAppointment,
              },
            }))
          }
        >
          Есть назначение врача
        </button>
      </div>

      {/* Upload Button Section */}
      {currentOrder.options.isHaveDoctorsAppointment && (
        <div className="space-y-4">
          <button
            className="btn btn-ghost bg-my-green rounded-lg text-black font-bold px-2 py-1"
            onClick={triggerFileUpload}
          >
            Загрузить фото назначения
          </button>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
          />

          {/* Display file name after upload */}
          {currentOrder.options.photo && (
            <p className="text-sm text-gray-600">Загруженный файл: {fileName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorsAppointment;