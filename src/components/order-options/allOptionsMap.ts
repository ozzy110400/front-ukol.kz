import DaysForNurse from "./DaysForNurse";
import DoctorsAppointment from "./doctorsAppointment";
import Dressing from "./Dressing";
import Message from "./Message";
import NeedPharmacy from "./needPharmacy";
import PremiumIntoxication from "./PremiumIntoxication";
import WAButton from "./WAButton";
import WithDrugsCocktail from "./WithDrugsCocktail";


export const serviceOptionsMap = {
    'Укол': [
      {
        component: DoctorsAppointment,
      },
      {
        component: NeedPharmacy,
      }
    ],
    'Капельница': [
      {
        component: DoctorsAppointment,
      },
      {
        component: NeedPharmacy,
      }
    ],
    'Укол + Капельница': [
      {
        component: DoctorsAppointment,
      },
      {
        component: NeedPharmacy,
      }
      ],
    'Детоксикация': [
        {
        component: PremiumIntoxication,
        },
    ],  
    'Золушка (коктейли)': [
        {
        component: WithDrugsCocktail,
        },
    ],  
    'Перевязки': [
        {
        component: Dressing,
        },
        {
          component: NeedPharmacy,
        }
    ],
    'Пищевые отравления (капельница)': [
      {
        component: NeedPharmacy,
      },
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

  