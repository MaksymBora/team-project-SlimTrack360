export function getNumberOfDaysInMonth(dateString) {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;

  const lastDay = new Date(year, month + 1, 0).getDate();
  return lastDay;
}
