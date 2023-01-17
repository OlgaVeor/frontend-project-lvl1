const getRundomNumber = (max, min = 0) => {
  const rundomNumber = Math.round(min + (max - min) * Math.random());
  return rundomNumber;
};

export default getRundomNumber;
