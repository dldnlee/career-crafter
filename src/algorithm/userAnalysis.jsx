


export function userAnalysis(userScore, avg, belowAvg, aboveAvg) {
  if(userScore < avg) {
    return belowAvg; // if userScore is below avg return the below avg text
  } else if(userScore >= avg){
    return aboveAvg; // if userScore is above avg return the above avg text
  }
}

