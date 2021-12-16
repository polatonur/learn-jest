const subtract = require("../subtract");

test("should subtract first number from secont number", () => {
  const result = subtract(10, 4);
  const expected = 6;
  expect(result).toBe(expected);
});
