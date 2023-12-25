export const getAvarageWeight = (weightsArr) => {
  if (!weightsArr || weightsArr.length === 0) return '-';

  const weightsSum = weightsArr?.reduce((prevV, currentV) => prevV + currentV);

  return Math.round(weightsSum / weightsArr.length);
};
