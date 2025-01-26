// import {
//   Box,
//   CircularProgress,
//   Typography,
// } from '@mui/material';
// import { useAtom } from 'jotai';
// import currentOrderAtom from '../atoms/currentOrder';
// import Map from '../components/order/MapN';
// import LoginModal from '../components/order/LoginModal';
// import NotUnderstand from '../components/order/Notunderstand';
// import { serviceOptionsMap } from '../components/order/options/allOptionsMap';
// import ArrivalTime from '../components/order/ArrivalTime';
// import MapFooter from '../components/order/MapFooter';
// import { useLocation, useRoute } from 'wouter-preact';
// import ServiceCardsList from '../components/order/ServiceCardsList';
// import { authAtom } from 'atoms/auth';
// import { checkOpenOrder } from 'helpers/api/apiClient';
// import { useEffect, useState } from 'preact/hooks';
// import dayjs from 'dayjs';
// import { services } from 'helpers/default';

// export default function Service() {
//   const [, navigate] = useLocation();
//   const [match, params] = useRoute('/service/:code'); // Extract the code from the route
//   const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
//   const [authValue, setAuthValue] = useAtom(authAtom);
//   const [isCancelling, setIsCancelling] = useState(false); // Track the loading state for cancel

//   const currentService = params?.code
//     ? services.find((s) => s.code === params.code)
//     : null;

//   const getOptions = () => {
//     const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
//     return (
//       <Box>
//         {options.map(({ component: Component }, index: number) => (
//           <Component key={index} />
//         ))}
//       </Box>
//     );
//   };

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const res = await checkOpenOrder();
//         if (res.order) {
//           setCurrentOrder((prevOrder) => ({
//             ...prevOrder,
//             _id: res.order._id,
//             status: res.order.status,
//           }));
//         }
//       } catch (error) {
//         console.error('Error fetching order:', error);
//       }
//     };

//     fetchOrder();

//     // Set the current order title based on the route code
//     if (params?.code) {
//       const service = services.find((s) => s.code === params.code);
//       if (service) {
//         setCurrentOrder((prevOrder) => ({
//           ...prevOrder,
//           title: service.short_name,
//         }));
//       } else {
//         console.warn(`Service not found for code: ${params.code}`);
//       }
//     }
//   }, [params?.code]);

//   return (
//     <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
//      <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: '8px', mb: 3 }}>
//       <Typography 
//         sx={{ 
//           fontWeight: 'bold', 
//           color: '#333', 
//           letterSpacing: '0.5px', 
//         }}
//       >
//        Услуга: 
//         <span style={{ color: '#007BFF', fontWeight: 500, marginLeft: '8px' }}>
//           {currentService?.short_name || 'Услуга не найдена'}
//         </span>
//       </Typography>
//     </Box>
//       <Map />
//       {getOptions()}
//       <ArrivalTime />
//       <MapFooter />
//       <NotUnderstand />
//       <LoginModal />
//     </Box>
//   );
  
// }
