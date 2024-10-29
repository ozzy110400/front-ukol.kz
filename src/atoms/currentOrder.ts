import dayjs from 'dayjs';
import { atom } from 'jotai'
export type TOrder = {
    title?: string;
    streetAndBuildingNumber?: string;
    amount?: number;
    options: {
        isNeedPharmacy: boolean,
        isHaveDoctorsAppointment: boolean,
        isWithDrugsCocktail: boolean,
        isPremiumIntoxication: boolean,
        isWithDressingMaterial: boolean, 
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
    amount: 0,
    options : {
        isNeedPharmacy: false,
        isHaveDoctorsAppointment: false,
        isWithDrugsCocktail: false,
        isPremiumIntoxication: false,
        isWithDressingMaterial: false,
        photo: undefined,
        daysForNurse: 0,
        message: ''  
    },
    arrivalTime: {
        hours: dayjs().format('HH'),
        minutes: dayjs().format('mm'),
        isAlredyWithExtra: false,
        isNearestHour: true
    },

})