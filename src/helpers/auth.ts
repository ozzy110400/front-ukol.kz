import { AuthValue } from 'atoms/auth';
import { refresh } from './api';


export default function auth(): AuthValue {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return { user: null }; 
  }
  let user = null;

  refresh()
    .then(response => {
      localStorage.setItem('accessToken', response.accessToken);
      user = response.user; 
    })
    .catch(error => {
      console.error('Failed to authenticate:', error);
      localStorage.removeItem('accessToken'); 
    });

  return { user };
}
