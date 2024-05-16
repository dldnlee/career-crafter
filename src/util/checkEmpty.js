import { checkComplete } from "./checkComplete";


export function checkEmpty(userAnswers) {

  if (checkComplete(JSON.parse(userAnswers.outgoing))) {
    return JSON.parse(userAnswers.outgoing)
  } else if(checkComplete(JSON.parse(userAnswers.challenging))) {
    return JSON.parse(userAnswers.challenging)
  } else if(checkComplete(JSON.parse(userAnswers.regularity))) {
    return JSON.parse(userAnswers.regularity)
  } else if(checkComplete(JSON.parse(userAnswers.action))){
    return JSON.parse(userAnswers.action)
  } else if(checkComplete(JSON.parse(userAnswers.readiness))) {
    return JSON.parse(userAnswers.readiness)
  } else {
    return false // change to popup
  }
}

export function checkBias(userAnswers) {

  if (checkComplete(JSON.parse(userAnswers.outgoing))) {
    return JSON.parse(userAnswers.outgoing)
  } else if(checkComplete(JSON.parse(userAnswers.challenging))) {
    return JSON.parse(userAnswers.challenging)
  } else {
    return false // change to popup
  }
}



export function checkPref(userAnswers) {

  if (checkComplete(JSON.parse(userAnswers.regularity))) {
    return JSON.parse(userAnswers.outgoing)
  } else if(checkComplete(JSON.parse(userAnswers.action))) {
    return JSON.parse(userAnswers.action)
  } else {
    return false // change to popup
  }
}

// 직무 준비도
export function checkSpec(userAnswers) {

  if (checkComplete(JSON.parse(userAnswers.readiness))) {
    return JSON.parse(userAnswers.readiness)
  } else {
    return false // change to popup
  }
}