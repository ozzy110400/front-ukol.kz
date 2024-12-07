import { useRef, useState } from 'preact/hooks';
import { Box, Button, Checkbox, Typography } from '@mui/material';
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
    <Box sx={{ m: 2 }}>
      {/* Checkbox section */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox 
          checked={currentOrder.options.isHaveDoctorsAppointment}
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isHaveDoctorsAppointment: !prevOrder.options.isHaveDoctorsAppointment, // Toggle the checkbox state
              },
            }))
          }
        />
        <Button
          onClick={() => 
            setCurrentOrder(prevOrder => ({
              ...prevOrder,
              options: { // Update the nested options object
                ...prevOrder.options,
                isHaveDoctorsAppointment: !prevOrder.options.isHaveDoctorsAppointment, // Toggle the checkbox state
              },
            }))
          }
          sx={{
            textTransform: 'none',
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Typography variant="h3">Есть назначение врача</Typography>
        </Button>
      </Box>

      {/* Upload button section */}
      {currentOrder.options.isHaveDoctorsAppointment && (
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#88e788', 
              border: '3px solid black', 
              borderRadius: '140px',
              position: 'relative',
              overflow: 'hidden',
            }}
            onClick={triggerFileUpload} // Trigger the file input click on button click
          >
            <Typography variant="h5" sx={{
              fontSize: {
                xs: '1rem',   
                sm: '1.2rem',     
                md: '1.4rem',  
              },
            }}>
              Загрузить фото назначения
            </Typography>
          </Button>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={fileInputRef} // Reference the hidden input
            onChange={handleFileUpload}
          />

          {/* Display file name after upload */}
          {currentOrder.options.photo && (
            <Typography sx={{ mt: 2 }}>
              Загруженный файл: {fileName}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DoctorsAppointment;