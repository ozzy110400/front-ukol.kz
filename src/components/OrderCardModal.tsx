// import { useState } from 'react';
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Autocomplete,
//   Typography,
//   Checkbox
// } from '@mui/material';
// import { useAtom } from 'jotai';
// import currentOrderAtom from 'atoms/currentOrder';
// import openAtom from 'atoms/open';
// import amountAtom from 'atoms/amount';
// import axios from 'axios';
// import InputMask from 'react-input-mask';
// import { priceOption } from 'helpers/default';
// import { createOrder } from 'helpers/api';

// export default function OrderModal() {
//   const [selectedOptions, setSelectedOptions] = useState();
//   const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
//   const [open, setOpen] = useAtom(openAtom);
//   const [loading, setLoading] = useState(false);


//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = async () => {

//     console.log(currentOrder)
//     try {
//       const result = await createOrder(currentOrder);
//       console.log('Order created successfully:', result);
//     } catch (error) {
//       console.error('Failed to create order:', error);
//     }

//     setCurrentOrder(currentOrder);
//     console.log(currentOrder);
//     handleClose();
//   };

//   const handleGetLocation = async () => {
//     if (navigator.geolocation) {
//       setLoading(true); // Set loading to true when starting to fetch location
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const loc = position.coords;
//         try {
//           const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${loc.latitude}&lon=${loc.longitude}&format=json&zoom=18&addressdetails=1`);
//           setCurrentOrder(prevOrder => ({ ...prevOrder, streetAndBuildingNumber: response.data.display_name}))
//         } catch (error) {
//           console.error('Error fetching address:', error);
//         }finally {
//           setLoading(false); 
//         }
//       }, (error) => {
//         console.error('Error getting location:', error);
//         setLoading(false); 
//       });
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };
 
//   return ( 
//     <Dialog open={open} onClose={handleClose} fullWidth>
//       <DialogTitle>
//         <Typography variant="h5" sx={{ textAlign: 'center' }}>
//           Детали заказа "{currentOrder.title}"
//         </Typography>
//         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>

//         <Button
//          disabled 
//          variant="contained" 
//          sx={{ 
//           backgroundColor: '#88e788',
//           border: '3px solid black', 
//           borderRadius: '140px', 
//           mt: 2 
//           }}>
//           <Typography variant="h5">
//             Стоимость {currentOrder.amount}₸
//           </Typography>
//         </Button>
//         </Box>
//       </DialogTitle>
//       <DialogContent>
//       <Box sx={{ flexDirection: 'column', mb: 2 }}>
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Checkbox 
//       checked={currentOrder.isNeedPharmacy}
//       onChange={(e) => 
//         setCurrentOrder(prevOrder => ({ ...prevOrder, isNeedPharmacy: e.target.checked}))
//       }
//     />
//     <Button
//       onClick={() => 
//         setCurrentOrder(prevOrder => ({ ...prevOrder, isNeedPharmacy: !prevOrder.isNeedPharmacy }))
//       }
//       sx={{
//         textTransform: 'none',
//         padding: 0,
//         '&:hover': {
//           backgroundColor: 'transparent',
//         },
//       }}
//     >
//       <Typography variant="h3">Нужно зайти в аптеку за лекарствами</Typography>
//     </Button>
//   </Box>
  
        
//         {currentOrder.isNeedPharmacy && (
//           <>
//             <TextField
//               label="Название лекарств"
//               value={currentOrder.medicines || ''}
//               onChange={(event) => 
//                 setCurrentOrder(prevOrder => ({ ...prevOrder, medicines: event.target.value}))
//               }
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />
//           </>
//         )}
//       </Box>
//         <Box sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//           <Typography variant="h3">Адрес куда должен приехать врач</Typography>
//           <Button   
//           disabled={loading} 
//           variant="contained"
//           onClick={handleGetLocation}
//           sx={{ backgroundColor: '#88e788', border: '3px solid black', borderRadius: '140px', mt:2 }}>
//             <Typography variant="h3">Использовать текущее местоположение</Typography>
//           </Button>
          
//         </Box>
//             <TextField
//               required
//               label="Улица, номер дома"
//               value={currentOrder.streetAndBuildingNumber}
//               onChange={(event) => 
//                 setCurrentOrder(prevOrder => ({ ...prevOrder, streetAndBuildingNumber: event.target.value}))
//               }
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               placeholder="Enter address manually"
//             />

//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <TextField
//             required
//             label="квартира"
//             value={currentOrder.flat}
//             onChange={(event) => 
//               setCurrentOrder(prevOrder => ({ ...prevOrder, flat: event.target.value}))
//             }
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             sx={{ mr: '2%' }}
//           />
//           <TextField
//             required  
//             label="этаж"
//             value={currentOrder.floor}
//             onChange={(event) => 
//               setCurrentOrder(prevOrder => ({ ...prevOrder, floor: event.target.value}))
//             }
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             sx={{ ml: '2%' }}
//           />
//         </div>
//         <Typography variant="h3">Телефонный номер по которому с вами можно связаться</Typography>
//         <Box sx={{ mt: '2%' }}>
//           <InputMask
//             required
//             mask="+7 (999) 999-9999"
//             value={currentOrder.phoneNumber}
//             onChange={(event) => 
//               setCurrentOrder(prevOrder => ({ ...prevOrder, phoneNumber: event.target.value}))
//             }
//           >
//             {() => (
//               <TextField
//                 label="Номер телефона"
//                 variant="outlined"
//                 fullWidth
//               />
//             )}
//           </InputMask>
//         </Box>
//       </DialogContent>

//       <DialogActions sx={{ display: 'flex', width: '100%', justifyContent: 'end', }}>
//         <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: '#88e788', border: '3px solid black', borderRadius: '140px' }}>
//           <Typography variant="h5">Заказать</Typography>
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }




