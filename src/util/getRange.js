import {pb} from '../data/index'



const answers = [
  {activity : [1, 1, 1, 0, 0, 0, 0]},
  {readiness : [0, 0, 0, 0, 0, 0, 0]},
  {challenging : [0, 0, 0, 0, 0, 0, 0]},
  {mental : [0, 0, 0, 0, 0, 0, 0]}
]

export function getRange() {
  
  for (let i=0; i<answers.activity.length; i++) {
    if (i !== 1) {
      console.log(i.index())
      break;
    }
    
  }
}