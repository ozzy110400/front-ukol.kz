import DaysForNurse from "./DaysForNurse";
import DoctorsAppointment from "./DoctorsAppointment";
import Dressing from "./Dressing";
import IsChild from "./IsChild";
import Message from "./Message";
import NeedInjection from "./NeedInjection";
import NeedPharmacy from "./NeedPharmacy";
import NeedWoman from "./NeedWoman";
import PremiumIntoxication from "./PremiumIntoxication";
import WithMaterialsPoisoning from "./WithMaterialsPoisoning";


// export const serviceOptionsMapOld = {
//     'Укол': [
//       {
//         component: DoctorsAppointment,
//       },
//       {
//         component: IsChild,
//       },
//       {
//         component: NeedWoman,
//       },
//       {
//         component: NeedPharmacy,
//       },
//       {
//         component: Message,
//       }
//     ],
//     'Капельница': [
//       {
//         component: DoctorsAppointment,
//       },
//       {
//         component: IsChild,
//       },
//       {
//         component: NeedWoman,
//       },
//       {
//         component: NeedPharmacy,
//       },
//       {
//         component: Message,
//       },
//     ],
//     'Укол + Капельница': [
//       {
//         component: DoctorsAppointment,
//       },
//       {
//         component: IsChild,
//       },
//       {
//         component: NeedWoman,
//       },
//       {
//         component: NeedPharmacy,
//       },
//       {
//         component: Message,
//       }
//       ],
//     'Детоксикация': [
//         {
//         component: PremiumIntoxication,
//         },
//         {
//           component: Message,
//         }
//     ],  
//     // 'Золушка (коктейли)': [
//     //     {
//     //     component: WithDrugsCocktail,
//     //     },
//     //     {
//     //       component: Message,
//     //     }
//     // ],  
//     'Перевязки': [
//         {
//         component: Dressing,
//         },
//         {
//           component: Message,
//         }
//     ],
//     'Пищевые отравления (капельница)': [
//       {
//         component: WithMaterialsPoisoning,
//       },
//       {
//         component: Message,
//       }
//     ],
//     'Медсестра на время': [
//       {
//         component: DaysForNurse,

//       },
//       {
//         component: Message,
//       },
//     ],
//     'Врач на дом': [
//       {
//         component: Message,
//       },
//     ],
//   };


  export const serviceOptionsMap = {
    intramuscularly: [
      {
        component: DoctorsAppointment,
      },
      {
        component: IsChild,
      },
      {
        component: NeedWoman,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      }
    ],
    intravenous: [
      {
        component: DoctorsAppointment,
      },
      {
        component: IsChild,
      },
      {
        component: NeedWoman,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      }
    ],
    subcutaneous: [
      {
        component: DoctorsAppointment,
      },
      {
        component: IsChild,
      },
      {
        component: NeedWoman,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      }
    ],
    poisoning: [
      {
        component: DoctorsAppointment,
      },
      {
        component: IsChild,
      },
      {
        component: NeedWoman,
      },
      {
        component: WithMaterialsPoisoning,
      },

      {
        component: Message,
      },
    ],
    custom: [
      {
        component: DoctorsAppointment,
      },
      {
        component: IsChild,
      },
      {
        component: NeedWoman,
      },
      {
        component: NeedInjection,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      },
    ],
    alcohol: [
        {
        component: PremiumIntoxication,
        },
        {
          component: Message,
        }
    ],
    drug: [
      {
      component: PremiumIntoxication,
      },
      {
        component: Message,
      }
    ],   
    regular: [
        {
        component: Dressing,
        },
        {
          component: Message,
        }
    ],
    old: [
      {
        component: DaysForNurse,

      },
      {
        component: Message,
      },
    ],
    bed: [
      {
        component: DaysForNurse,

      },
      {
        component: Message,
      },
    ],
    event: [
      {
        component: DaysForNurse,

      },
      {
        component: Message,
      },
    ],
  };

  