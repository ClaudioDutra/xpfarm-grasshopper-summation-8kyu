const { summation } = require("../src/summation");

describe("Validating the summation", () => {
  test.each([
    [1, 1],
    [3, 2],
    [36, 8],
  ])("should return %i when the number is %i", (result, number) => {
    expect(summation(number)).toBe(result);
  });
});
