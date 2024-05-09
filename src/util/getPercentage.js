

export function getPercentage(curr, total=50) {
  const percentage = (curr / total) * 100;
  return percentage;
}