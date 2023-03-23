const { summation } = require("../src/summation");

describe("Validating the summation", () => {
  test.each([
    [1, 1],
    [2, 3],
    [8, 36],
  ])("should return %i when the number is %i", (number, result) => {
    expect(summation(number)).toBe(result);
  });
});
