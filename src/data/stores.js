import {atom} from 'jotai';


// Settings Page active state
export const settings = atom(false);
export const communityTab = atom(1);

export const swiperIndex = atom(0);
export const category = atom('');
export const GNBPage = atom('홈');
export const userData = atom([]);

export const q_rangeStart = atom(0);
export const q_rangeEnd = atom(0);
export const userAnswerData = atom();
export const userProgress = atom(0);