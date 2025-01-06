import axios from 'axios';

const baseURL = import.meta.env['VITE_BACK_URL_SPEC']; 

const $api = axios.create({
    baseURL,
    withCredentials: true
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

// $api.interceptors.response.use(
//     (config) => config,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response && error.response.status === 401 && !originalRequest._isRetry) {
//             originalRequest._isRetry = true;
//             try {
//                 const response = await axios.get(`${baseURL}/auth/refresh`);
//                 localStorage.setItem('accessToken', response.data.accessToken);
//                 return $api.request(originalRequest);
//             } catch (e) {
//                 console.log('Not auth');
//             }
//         }
//         throw error;
//     }
// );

export const fetchNurses = async (idMessageWA: string) => {
    // const specialists = await axios.get(
    //     `${env.SPEC_URL}/order/check/${idMessageWA}`
    //   )
    //   console.log('Axios response:', specialists)
 const response = await $api.get(`/order/check/${idMessageWA}`);
    console.log('Axios response:', response)
  return response.data;
};



