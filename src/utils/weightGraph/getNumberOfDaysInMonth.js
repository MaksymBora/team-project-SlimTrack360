export const getNumberOfDaysInMonth = (month, year) => {
  const date = new Date(
    year,
    new Date(Date.parse(month + ' 1, ' + year)).getMonth() + 1,
    0
  );
  return date.getDate();
};
