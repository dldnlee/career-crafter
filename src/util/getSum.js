

export function getSum(list) {
  // const sum = list.reduce((partialSum, a) => partialSum + a, 0);
  let count = 0;
  for(let i=0; i<list.length; i++) {
    if(list[i] !== 0) {
      count += 1;
    } 
  }
  return count;
}

export function getPoints(list) {
  const sum = list.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}