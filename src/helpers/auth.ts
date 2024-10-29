import { refresh } from './api';


export default async function auth() {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return { user: null };
    }

    // If token exists, validate it by calling checkAuth
    const response = await refresh();

    // Optionally refresh the token if necessary
    localStorage.setItem('accessToken', response.accessToken);

    // Return the authenticated state with user info
    return {
      user: response.user,
    };
  } catch (error) {
    console.error('Failed to authenticate:', error);

    localStorage.removeItem('accessToken'); 

    return { user: null };
  }
}
