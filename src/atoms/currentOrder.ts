import dayjs from 'dayjs';
import { atom } from 'jotai'
export type TOrder = {
    _id?: string,
    title?: string;
    streetAndBuildingNumber?: string;
    lat?: number,
    lng?: number,
    flat?: string;
    floor?: string;
    amount?: number;
    options: {
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
        isAlredyWithExtra: boolean
        isNearestHour: boolean
        date: string | null;
    },
    status: string
}
export default atom<TOrder>({
    _id: '',
    title: '',
    streetAndBuildingNumber: '',
    flat: '',
    floor: '',
    amount: 0,
    options : {
        isNeedPharmacy: false,
        isHaveDoctorsAppointment: false,
        isWithDrugsCocktail: false,
        isPremiumIntoxication: false,
        isWithDressingMaterial: false,
        isWithMaterialsPoisoning: false,
        photoURL: '',
        photo: undefined,
        daysForNurse: 0,
        message: ''  
    },
    arrivalTime: {
        hours: dayjs().add(1, 'hour').format('HH'),
        minutes: dayjs().format('mm'),
        date: dayjs().format('YYYY-MM-DD'),
        isAlredyWithExtra: false,
        isNearestHour: true
    },
    status: ''

})