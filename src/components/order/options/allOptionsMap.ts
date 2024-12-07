import DaysForNurse from "./DaysForNurse";
import DoctorsAppointment from "./DoctorsAppointment";
import Dressing from "./Dressing";
import Message from "./Message";
import NeedPharmacy from "./NeedPharmacy";
import PremiumIntoxication from "./PremiumIntoxication";
import WAButton from "./WAButton";
import WithDrugsCocktail from "./WithDrugsCocktail";
import WithMaterialsPoisoning from "./WithMaterialsPoisoning";


export const serviceOptionsMap = {
    'Укол': [
      {
        component: DoctorsAppointment,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      }
    ],
    'Капельница': [
      {
        component: DoctorsAppointment,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      }
    ],
    'Укол + Капельница': [
      {
        component: DoctorsAppointment,
      },
      {
        component: NeedPharmacy,
      },
      {
        component: Message,
      }
      ],
    'Детоксикация': [
        {
        component: PremiumIntoxication,
        },
        {
          component: Message,
        }
    ],  
    'Золушка (коктейли)': [
        {
        component: WithDrugsCocktail,
        },
        {
          component: Message,
        }
    ],  
    'Перевязки': [
        {
        component: Dressing,
        },
        {
          component: Message,
        }
    ],
    'Пищевые отравления (капельница)': [
      {
        component: NeedPharmacy,
      },
      {
        component: WithMaterialsPoisoning,
      },
      {
        component: Message,
      }
    ],
    'Медсестра на время': [
      {
        component: DaysForNurse,

      },
      {
        component: Message,
      },
    ],
    'Врач на дом': [
      {
        component: Message,
      },
    ],
    'Другое': [
      {
        component: Message,
      },
      {
        component: WAButton,
      },
      
    ],
  };

  