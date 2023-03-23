function summation(number) {
  let summationResult = 0;

  for (let i = 1; i <= number; i += 1) {
    summationResult += i;
  }

  return summationResult;
}

module.exports = {
  summation,
};
