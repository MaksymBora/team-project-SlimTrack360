export const generateWeightArray = (
  daysInMonth,
  totalWeightArray,
  prevWeight
) => {
  const initialWeights = Array(daysInMonth).fill(null);

  const weights = totalWeightArray.reduce((acc, entry) => {
    const day = new Date(entry.date).getDate() - 1;
    acc[day] = entry.weight;
    return acc;
  }, initialWeights);

  for (let i = 1; i < weights.length; i++) {
    if (weights[i] === null) {
      weights[i] = weights[i - 1];
    }
  }

  const newArray = weights.map((value) =>
    value === null ? prevWeight : value
  );

  return newArray;
};
