import auth from '../helpers/auth'
import { atom } from 'jotai'

export type AuthValue = {
    user: any | null; 
}
  
export default atom<AuthValue>(auth())