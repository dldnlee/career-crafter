import { 
  outgoingQuestions,
  challengingQuestions,
  regularityQuestions,
  actionQuestions,
  readinessQuestions } from "../data/questions";
import { checkComplete } from "./checkComplete";


export function getRandomQuestions(userAnswers) {
  if(!userAnswers) return;

  if (checkComplete(JSON.parse(userAnswers.outgoing))) {
    return [outgoingQuestions, 1]
  } else if(checkComplete(JSON.parse(userAnswers.challenging))) {
    return [challengingQuestions, 2]
  } else if(checkComplete(JSON.parse(userAnswers.regularity))) {
    return [regularityQuestions, 3]
  } else if(checkComplete(JSON.parse(userAnswers.action))){
    return [actionQuestions, 4]
  } else if(checkComplete(JSON.parse(userAnswers.readiness))) {
    return [readinessQuestions, 5]
  } else {
    return false // change to popup
  }
}



export function getBiasQuestions(userAnswers) {
  if(!userAnswers) return;

  if (checkComplete(JSON.parse(userAnswers.outgoing))) {
    return [outgoingQuestions, 1]
  } else if(checkComplete(JSON.parse(userAnswers.challenging))) {
    return [challengingQuestions, 2] 
  } else {
    return false // change to popup
  }
}

export function getPrefQuestions(userAnswers) {
  if(!userAnswers) return;

  if(checkComplete(JSON.parse(userAnswers.regularity))) {
    return [regularityQuestions, 3]
  } else if(checkComplete(JSON.parse(userAnswers.action))){
    return [actionQuestions, 4]
  } else {
    return false // change to popup
  }
}

export function getSpecQuestions(userAnswers) {
  if(!userAnswers) return;

  if (checkComplete(JSON.parse(userAnswers.readiness))) {
    return [readinessQuestions, 5]
  } else {
    return false // change to popup
  }
}