// import SyringeIcon from '/img/service/injection.svg';
// import DropletIcon from '/img/droplet-icon.svg';
// import UtensilsIcon from '/img/utensils-solid.svg';
// import DripIcon from '/img/service/drip.svg';
// import DoctorIcon from '/img/service/doctor.svg';
// import NurseIcon from '/img/service/nurse.svg';
// import CocktailIcon from '/img/service/cocktail.svg';
// import PillsIcon from '/img/pills-solid.svg';
// import BandAidIcon from '/img/bandage-solid.svg';

// export const servicesOld = [
//   { 
//     title: 'Укол',
//     price: 5000, 
//     description: 'Профессиональное введение инъекций на дому. Цена указана от 5 000 ₸.',
//     img: 'img/injection.svg',
//   },
//   { 
//     title: 'Капельница',
//     price: 7_000,  
//     description: 'Постановка капельниц на дому. Цена указана от 7 000 ₸.',
//     img: 'img/drip.svg',
//   },
//   { 
//     title: 'Укол + Капельница',
//     price: 8_000,
//     description: 'Комплексная услуга (укол и капельница). Цена указана от 8 000 ₸.',
//     img: 'img/injection_plus_drip.svg',
//   },
//   { 
//     title: 'Детоксикация',
//     price: 25_000,
//     description: '!Предоплата обязательна! Детоксикация: стандарт (7 препаратов) от 30 000 ₸, элит (10 препаратов) от 60 000 ₸.',
//     img: 'img/detox.svg',
//   },
//   { 
//     title: 'Золушка (коктейли)',
//     price: 12_000,
//     description: 'Золушка (Синдерелла) коктейль. Цена от 12 000 ₸ (без препаратов), от 25 000 ₸ (с препаратами).',
//     img: 'img/cocktails.svg',
//   },
//   { 
//     title: 'Перевязки',
//     price: 7_000,
//     description: 'Перевязочные процедуры. Цена от 7 000 ₸ (без материалов), от 8 000 ₸ (с материалами).',
//     img: 'img/bandaging.svg',
//   },

//   { 
//     title: 'Пищевые отравления (капельница)',
//     price: 15_000,
//     description: 'Лечение пищевых отравлений с помощью капельницы. Цена указана от 7 000 ₸.',
//     img: 'img/food_poisoning.svg',
//   },
  
//   { 
//     title: 'Медсестра на время',
//     price: 20_000,
//     description: 'Услуги медсестры на день (8 часов). Цена 20 000 ₸.',
//     img: 'img/nurse.svg',
//   },
//   { 
//     title: 'Врач на дом',
//     price: 20_000,
//     description: 'Выезд врача на дом. Цена от 20 000 ₸ (осмотр, назначение).',
//     img: 'img/doctor.svg',
//   },
//   { 
//     title: 'Другое',
//     price: 0,
//     description: 'Выезд врача на дом. Цена от 20 000 ₸ (осмотр, назначение).',
//     img: 'img/doctor.svg',
//   },
// ];


// export const services = [
//   { 
//     title: 'Уколы на дому', 
//     code: 'injection',
//     short_name: 'Укол', 
//     price: 5000, 
//     description: 'Быстрое и безопасное введение инъекций у вас дома.', 
//     icon: SyringeIcon 
//   },
//   { 
//     title: 'Капельницы на дому', 
//     code: 'drip', 
//     short_name: 'Капельница', 
//     price: 7_000,  
//     description: 'Эффективное восстановление организма капельницей прямо у вас дома.', 
//     icon: DripIcon 
//   },
//   { 
//     title: 'Укол + Капельница', 
//     code: 'injection-and-drip', 
//     short_name: 'Укол + Капельница', 
//     price: 8_000,
//     description: 'Комплексная услуга: инъекция и капельница для максимального эффекта.', 
//     icon: DropletIcon
//   },
//   { 
//     title: 'Детоксикация', 
//     code: 'detox', 
//     short_name: 'Детоксикация', 
//     price: 25_000,
//     description: 'Детоксикация и восстановление с помощью капельницы от интоксикации.', 
//     icon: PillsIcon 
//   },
//   { 
//     title: 'Коктейли', 
//     code: 'cocktails', 
//     short_name: 'Золушка (коктейли)', 
//     price: 12_000,
//     description: 'Коктейли красоты и здоровья для быстрого восстановления организма.', 
//     icon: CocktailIcon 
//   },
//   { 
//     title: 'Перевязки', 
//     code: 'bandages', 
//     short_name: 'Перевязки', 
//     price: 7_000,
//     description: 'Профессиональный уход за ранами для быстрого заживления и комфорта.',
//     icon: BandAidIcon 
//   },
//   { 
//     title: 'Пищевые отравления',
//     code: 'food-poisoning', 
//     short_name: 'Пищевые отравления (капельница)', 
//     price: 15_000,
//     description: 'Лечение пищевых отравлений с помощью капельницы для восстановления.',
//     icon: UtensilsIcon
//   },
//   { 
//     title: 'Медсестра на время', 
//     code: 'nurse', 
//     short_name: 'Медсестра на время', 
//     price: 20_000,
//     description: 'Чуткий и заботливый уход за пациентом. Цена за 8 часов.',
//     icon: NurseIcon 
//   },
//   { 
//     title: 'Врач на дом',
//     code: 'doctor', 
//     short_name: 'Медсестра на время', 
//     price: 20_000,
//     description: 'Профессиональный врач приедет к вам для диагностики и лечения. Цена за выезд. ',
//     icon: DoctorIcon,
//   },
// ];