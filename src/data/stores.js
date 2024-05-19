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

// 다변
export const outgoingAnswers = atom([]);
export const challengingAnswers = atom([]);
export const regularityAnswers = atom([]);
export const actionAnswers = atom([]);
export const readinessAnswers = atom([]);


// progress
export const headerState = atom(true);


// 회원가입
export const signupData = atom();
export const initStats = atom([]);