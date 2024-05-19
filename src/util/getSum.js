

export function getSum(list) {
  let count = 0;
  for(let i=0; i<list.length; i++) {
    if(list[i] !== 0) {
      count += 1;
    } 
  }
  return count;
}

export function getTotalSum(listOfLists) {
  let sum = 0;
  listOfLists.forEach(element => {
    sum += getSum(element);
  });
  return sum;
}

// Used to get the sum of answers
export function getSumOfList(list) {
  let sum = 0;
  list.forEach(element => {
    sum += element;
  });
  return sum;
}

// This is the function used to get the total sum of answers
export function getTotalAnswerSum(listOfLists) {
  let total = 0;
  listOfLists.forEach(element => {
    total += getSumOfList(element);
  });
  return total;
}

export function getPoints(list) {
  const sum = list.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}