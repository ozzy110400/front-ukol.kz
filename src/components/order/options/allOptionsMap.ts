import DaysForNurse from "./DaysForNurse";
import DoctorsAppointment from "./DoctorsAppointment";
import Dressing from "./Dressing";
import IsChild from "./IsChild";
import Message from "./Message";
import NeedPharmacy from "./NeedPharmacy";
import NeedWoman from "./NeedWoman";
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
    'Капельница': [
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
      },
    ],
    'Укол + Капельница': [
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
  };

  