


export function setDefaultValues(list, startRange, endRange=(startRange + 5)) {
  let newList = [...list]
  for(startRange; startRange<endRange; startRange++) {
    newList[startRange] = 3;
  }
  console.log(newList);
  return newList;
}