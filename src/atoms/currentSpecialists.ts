import { atom } from 'jotai';

export type TNurse = {
  _id?: string;
  title: string;
  status: string;
};

export const currentSpecAtom = atom<TNurse[]>([]); 
