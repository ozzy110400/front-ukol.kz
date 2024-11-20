import dayjs from 'dayjs';
import { atom } from 'jotai'
export type TOrder = {
    title?: string;
    streetAndBuildingNumber?: string;
    lat?: number,
    lng?: number,
    flat?: string;
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
    },
}
export default atom<TOrder>({
    title: '',
    streetAndBuildingNumber: '',
    flat: '',
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
        isAlredyWithExtra: false,
        isNearestHour: true
    },

})