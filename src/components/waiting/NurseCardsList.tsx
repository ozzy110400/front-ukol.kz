// import React, { useEffect, useRef, useState } from 'react';
// import { useAtom } from 'jotai';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
// import Typography from '@mui/material/Typography';
// import { fetchNurses } from 'helpers/api/apiSpec';

// import { currentSpecAtom } from '../../atoms/currentSpecialists';
// //import EmptyStateMessage from './EmptyStateMessage';
// import { trackClarityEvent } from 'App';
// import currentOrderAtom from '../../atoms/currentOrder';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { selectSpec } from 'helpers/api/apiClient';

// const NurseCardsList = () => {
//   const [currentSpecs, setCurrentNurses] = useAtom(currentSpecAtom);
//   const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
//   const pollingInterval = useRef<NodeJS.Timeout | null>(null);
//   const previousNurses = useRef<any[]>([]); // Store the previous nurses list

//   useEffect(() => {
//     const startPolling = () => {
//       pollingInterval.current = setInterval(async () => {
//         try {
//           const fetchedNurses = await fetchNurses(currentOrder._id!);
//           console.log(fetchedNurses.data);
//           if (JSON.stringify(fetchedNurses.data) !== JSON.stringify(previousNurses.current)) {
//             setCurrentNurses(fetchedNurses.data);
//             previousNurses.current = fetchedNurses.data; // Update previous state
//           }
//           if (currentOrder?.title == '') {
//             stopPolling();
//           }
//         } catch (error) {
//           console.error('Error fetching nurses:', error);
//         }
//       }, 5000); // Poll every 5 seconds (adjust polling frequency)
//     };

//     const stopPolling = () => {
//       if (pollingInterval.current) {
//         clearInterval(pollingInterval.current);
//         pollingInterval.current = null;
//       }
//     };

//     // Start polling when the component mounts
//     startPolling();

//     // Stop polling when a nurse is selected
//     if (currentSpecs.length > 0 && currentOrder?.title === '') {
//       stopPolling();
//     }

//     // Cleanup on component unmount
//     return () => {
//       stopPolling();
//     };
//   }, [currentSpecs, currentOrder, setCurrentNurses]);

//   const [dots, setDots] = useState('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
//     }, 500); // Adjust timing for dot animation speed

//     return () => clearInterval(interval);
//   }, []);


//   const handleSelect = async (currentOrderId: string, id: string) => {
//     const res = await selectSpec(currentOrderId, id)
//      console.log(res)

//     trackClarityEvent('nurse_selected');
//   };

//   const getMinutesLabel = (minutes: number) => {
//     const lastDigit = minutes % 10;
//     const lastTwoDigits = minutes % 100;
  
//     if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
//       return 'минут';
//     }
  
//     if (lastDigit === 1) {
//       return 'минута';
//     }
  
//     if (lastDigit >= 2 && lastDigit <= 4) {
//       return 'минуты';
//     }
  
//     return 'минут';
//   };
  
  

 
//   const getYearsLabel = (experience: number) => {
//     const lastDigit = experience % 10;
//     const lastTwoDigits = experience % 100;
  
//     if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
//       return 'лет'; // Special case for numbers ending in 11–14
//     }
  
//     if (lastDigit === 1) {
//       return 'год';
//     }
  
//     if (lastDigit >= 2 && lastDigit <= 4) {
//       return 'года';
//     }
  
//     return 'лет';
//   };
  
//   // if (currentSpecs.length === 0) {
//   //   return <EmptyStateMessage />;
//   // }

//   return (
//     <List
//       sx={{
//         mt: 2,
//         ml: 2,
//         mr: 2,
//         background: 'none',
//         position: 'relative',
//         overflow: 'auto',
//         maxHeight: 340,
//         '& ul': { padding: 0 },
//       }}
//       subheader={<li />}
//     >

//       <Typography variant="h5" sx={{ m: 2}}>
//           Выберите медика из списка ниже:
//       </Typography>
      
//       {currentSpecs.map((spec) => (
//         <ListItem
//           key={spec._id}
//           selected={currentSpecs._id === spec._id}
//           sx={{
//             backgroundColor: currentSpecs._id === spec._id ? '#88e788' : 'transparent',
//             color: currentSpecs._id === spec._id ? 'dark' : 'inherit',
//             border: '3px solid black',
//             borderRadius: '8px',
//             marginBottom: '0.5rem',
//             transition: 'background-color 0.3s ease',
//           }}
//         >
//       <ListItemText
//         primary={
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             {spec.name}, опыт {spec.experience} {getYearsLabel(spec.experience)}
//           </Typography>
//         }
//         sx={{ flexGrow: 1 }}
//         secondary={
//           <Typography variant="body2" sx={{  }}>
//             Может быть у ваc через {spec.experience} {getMinutesLabel(spec.experience)}
//           </Typography>
//         }
//       />

//       < Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
//       <Button
//             variant="contained"
//             color="primary"
//             size="small"
//             onClick={() => handleSelect(spec.currentOrderId, spec._id)}
//             sx={{
//               backgroundColor: '#88e788',
//               border: '3px solid black',
//               borderRadius: '140px',
//               position: 'relative',
//             }}
//           >
//           <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
//           Выбрать
//          </Typography>

//     </Button>
//       </Box>
//     </ListItem>
//   ))}
//    <Typography variant="h5" sx={{ mt: 2, ml: 2, mr: 2}}>
//       продолжаем подбор {dots}
//     </Typography>
//    </List>
//   );
// };

// export default NurseCardsList;
