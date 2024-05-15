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
import { userAnswerData } from "/src/data";
import { useAtomValue } from "jotai";
import {useNavigate} from 'react-router-dom';

export function useQuestionsPage(category) {

  const [rangeStart, setRangeStart] = useState(0);
  const [answerSheet, setAnswerSheet] = useState([]);
  const userAnswers = useAtomValue(userAnswerData);
  const [questions, setQuestions] = useState([]);
  const [questionType, setQuestionType] = useState(0);
  const navigate = useNavigate();

  // 0 is the questions and 1 is the answers
  // Set category of questions based on params category
  useEffect(() => {
    if (!getRandomQuestions(userAnswers)) return;
    switch (category) {
      case '오늘의 질문':
        setQuestions(getRandomQuestions(userAnswers)[0]);
        setQuestionType(getRandomQuestions(userAnswers)[1]);
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
    if (!userAnswers) return;
    let range = 0;
    let answers = [];
    switch (category) {
      case '오늘의 질문':
        if (!checkEmpty(userAnswers)) {
          alert('모든 질문에 답변하셨습니다');
          navigate('/main', {replace:true});
        }
        range = getRange(checkEmpty(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkEmpty(userAnswers), range)
        setAnswerSheet(answers);
        break;
      case '스펙이':
        if (!checkSpec(userAnswers)) {
          alert('모든 질문에 답변하셨습니다');
          navigate('/main', {replace:true});
        }
        range = getRange(checkSpec(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkSpec(userAnswers), range)
        setAnswerSheet(answers);
        break;
      case '취향이':
        if (!checkPref(userAnswers)) {
          alert('모든 질문에 답변하셨습니다');
          navigate('/main', {replace:true});
        }
        range = getRange(checkPref(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkPref(userAnswers), range)
        setAnswerSheet(answers);
        break;
    }
    
  }, [])


  return {rangeStart, answerSheet, questions, questionType, userAnswers, setAnswerSheet};
}