const anagram = require("../anagram");

test("should return true", () => {
  expect(anagram("anana")).toBe(true);
});
