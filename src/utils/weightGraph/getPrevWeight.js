export const getPrevWeight = (array, currentMonth) => {
  const sortedArray = array
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  let targetIndex = -1;

  for (let i = 0; i < sortedArray.length; i++) {
    const currentDate = new Date(sortedArray[i].date);
    const currentMonthOfItem = currentDate.getMonth() + 1;

    if (currentMonthOfItem === currentMonth) {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex === -1) {
    const objectsBeforeCurrentMonth = sortedArray.filter((item) => {
      const monthOfItem = new Date(item.date).getMonth() + 1;
      return monthOfItem < currentMonth;
    });

    return objectsBeforeCurrentMonth.length > 0
      ? objectsBeforeCurrentMonth[objectsBeforeCurrentMonth.length - 1]
      : sortedArray[0];
  }

  if (targetIndex > 0) {
    return sortedArray[targetIndex - 1];
  }

  return sortedArray[0];
};
