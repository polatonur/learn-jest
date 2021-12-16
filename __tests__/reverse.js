const { expect } = require("@jest/globals");
const reverse = require("../reverse");
test("should return reverse of react", () => {
  const reversedString = reverse("react");

  expect(reversedString).toBe("tcaer");
});
