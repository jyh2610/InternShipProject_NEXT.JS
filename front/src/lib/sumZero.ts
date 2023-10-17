export const sumZero = (num: number) => {
  let numberString = num.toString();

  if (numberString.length === 1) {
    numberString = "0" + numberString;
  }
  return numberString;
};
