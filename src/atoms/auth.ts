import { atom } from 'jotai';
import { refresh } from '../helpers/api';

export type AuthValue = {
  user: any | null;
  haveActualOrder: boolean
};

async function auth() {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return { user: null, haveActualOrder: false };
    }
    // If token exists, validate it by calling checkAuth
    const response = await refresh();
    // Optionally refresh the token if necessary
    localStorage.setItem('accessToken', response.accessToken);
    // Return the authenticated state with user info
    return { user: response.user, haveActualOrder: response.haveActualOrder };
  } catch (error) {
    console.error('Failed to authenticate:', error);
    localStorage.removeItem('accessToken');
    return { user: null, haveActualOrder: false};
  }
}

// Create an atom that fetches authentication data asynchronously
export const authAtom = atom<AuthValue | Promise<AuthValue>>(auth());
