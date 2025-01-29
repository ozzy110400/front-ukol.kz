import dayjs from 'dayjs';
import { atomWithStorage } from 'jotai/utils';

export type TOrder = {
    _id?: string,
    title: string;
    address: string;
    flat?: string;
    floor?: string;
    amount: number;
    phone: string;
    options: {
        isChild: boolean,
        isNeedWoman: boolean,
        isNeedInjection: boolean,
        isNeedPharmacy: boolean,
        isHaveDoctorsAppointment: boolean,
        isWithDrugsCocktail: boolean,
        isPremiumIntoxication: boolean,
        isWithDressingMaterial: boolean, 
        isWithMaterialsPoisoning: boolean,
        photoURL: string,
        photo: any,
        daysForNurse: number,
        message: string  
    }
    arrivalTime: {
        hours: string,
        minutes: string,
        isNearestHour: boolean
        date: string;
    },
    status: string,
}

const currentOrderAtom = atomWithStorage<TOrder>('currentOrder', {
  _id: '',
  title: '',
  address: '',
  flat: '',
  floor: '',
  amount: 0,
  phone: '',
  options: {
    isChild: false,
    isNeedWoman: false,
    isNeedInjection: false,
    isNeedPharmacy: false,
    isHaveDoctorsAppointment: false,
    isWithDrugsCocktail: false,
    isPremiumIntoxication: false,
    isWithDressingMaterial: false,
    isWithMaterialsPoisoning: false,
    photoURL: '',
    photo: undefined,
    daysForNurse: 0,
    message: '',
  },
  arrivalTime: {
    hours: dayjs().add(1, 'hour').format('HH'),
    minutes: dayjs().format('mm'),
    date: dayjs().format('YYYY-MM-DD'),
    isNearestHour: true
},
  status: '',
});

export default currentOrderAtom;
