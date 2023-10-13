export const calcSum = (...args) => {
  return args.reduce((acc, num) => acc + num, 0);
};
export const getMax = (...args) => {
  return Math.max(...args);
};
