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
    return outgoingQuestions
  } else if(checkComplete(JSON.parse(userAnswers.challenging))) {
    return challengingQuestions
  } else if(checkComplete(JSON.parse(userAnswers.regularity))) {
    return regularityQuestions
  } else if(checkComplete(JSON.parse(userAnswers.action))){
    return actionQuestions
  } else if(checkComplete(JSON.parse(userAnswers.readiness))) {
    return readinessQuestions
  } else {
    return false // change to popup
  }
}