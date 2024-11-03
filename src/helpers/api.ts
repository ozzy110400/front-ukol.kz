import { TOrder } from '../atoms/currentOrder';
import axios from 'axios';

const baseURL = import.meta.env['VITE_BACK_URL']; 

const $api = axios.create({
    baseURL,
    withCredentials: true
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get(`${baseURL}/auth/refresh`);
                localStorage.setItem('accessToken', response.data.accessToken);
                return $api.request(originalRequest);
            } catch (e) {
                console.log('Not auth');
            }
        }
        throw error;
    }
);

export const createOrder = async (orderDetails: TOrder) => {
    try {
        const { streetAndBuildingNumber, flat, ...rest } = orderDetails;
        const address = `${streetAndBuildingNumber || ''} кв. ${flat || ''}`.trim();

        const orderToSend = {
            ...rest,
            address, 
        };

        const response = await $api.post('/order/create', orderToSend);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const uploadPhoto = async (formData: FormData) => {
    try {
        const uploadResponse = await $api.post('/order/uploadPhoto', formData);
        return uploadResponse.data;
    } catch (error) {
        console.error('Error uploading photo:', error);
        throw error;
    }
};

export const authPhone = async (phoneNumber: string) => {
    try {
        const body = { phoneNumber }; 
        const response = await  $api.post('/auth/phone', body)
        return response.data;
    } catch (error) {
        console.error('Error authenticating phone number:', error);
        throw error;
    }
};  

export const verifyCode = async (phoneNumber: string, code: string) => {
    try {
        const body = { phoneNumber, code };
        const response = await $api.post('/auth/code', body);
        return response.data
    } catch (error) {
        console.error('Error verifying code:', error);
        throw error;
    }
};  

export const refresh = async () => {
  try {
      const response = await $api.get('/auth/refresh');
      return response.data;
  } catch (error) {
      console.log(error)
      throw error;
  }
};  


