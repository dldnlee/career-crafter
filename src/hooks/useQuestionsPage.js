import { useEffect } from "react";
import { useState } from "react";
import { 
  getRandomQuestions, 
  getPrefQuestions, 
  getSpecQuestions, 
  getRange, 
  checkEmpty, 
  checkSpec, 
  checkPref, 
  setDefaultValues } from "/src/util";
import { userAnswerData, userData } from "/src/data";
import { useAtomValue, useAtom } from "jotai";
import { pb } from "/src/data";

export function useQuestionsPage(category) {

  const user = useAtomValue(userData);
  const [rangeStart, setRangeStart] = useState(0);
  const [answerSheet, setAnswerSheet] = useState([]);
  const [userAnswers, setUserAnswers] = useAtom(userAnswerData);
  const [questions, setQuestions] = useState([]);
  const [questionType, setQuestionType] = useState(0);

  // Set answersheet data for user
  useEffect(() => {
    async function getAnswerSheet() {
      const record = await pb.collection('answers').getFirstListItem(`user="${user.id}"`);
      setUserAnswers(record);
    }
    getAnswerSheet();
  }, [])

  // Set category of questions based on params category
  useEffect(() => {
    if (!getRandomQuestions(userAnswers)) return;
    switch (category) {
      case '오늘의 질문':
        setQuestions(getRandomQuestions(userAnswers)[0]);
        setQuestionType(getRandomQuestions(userAnswers)[1]);
        console.log(getRandomQuestions(userAnswers)[1])
        break;
      case '스펙이':
        setQuestions(getSpecQuestions(userAnswers)[0]);
        setQuestionType(getSpecQuestions(userAnswers)[1]);
        break;
      case '취향이':
        setQuestions(getPrefQuestions(userAnswers)[0]);
        setQuestionType(getPrefQuestions(userAnswers)[1]);
        break;
    }
  }, [])
  
  // Set current answer sheet
  useEffect(() => {
    // console.log(userAnswers);
    if (!userAnswers) return;
    let range = 0;
    let answers = [];
    switch (category) {
      case '오늘의 질문':
        if (!checkEmpty(userAnswers)) {alert('모든 질문에 답변하셨습니다')}
        range = getRange(checkEmpty(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkEmpty(userAnswers), range)
        setAnswerSheet(answers);
        break;
      case '스펙이':
        if (!checkSpec(userAnswers)) {alert('모든 질문에 답변하셨습니다')}
        range = getRange(checkSpec(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkSpec(userAnswers), range)
        setAnswerSheet(answers);
        break;
      case '취향이':
        if (!checkPref(userAnswers)) {alert('모든 질문에 답변하셨습니다')}
        range = getRange(checkPref(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkPref(userAnswers), range)
        setAnswerSheet(answers);
        break;
    }
    
  }, [])


  return {rangeStart, answerSheet, questions, questionType, userAnswers, setAnswerSheet};
}