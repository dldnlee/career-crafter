


export function removeItem(list, item) {
  const newList = list.filter((itm) => itm !== item)

  return newList;
}