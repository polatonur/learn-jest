const { expect } = require("@jest/globals");
const gameWinner = require("../gameWinner");
const utilsMock = require("../utils");

// const originalFunction = utils.getWinner;
jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  };
});

test("should ", () => {
  const winner = gameWinner("onur", "oguz");
  console.log(utilsMock.getWinner.mock.calls);
  expect(winner).toBe("oguz");
  expect(utilsMock.getWinner).toBeCalledTimes(3);
  expect(utilsMock.getWinner).toHaveBeenCalled();
  expect(utilsMock.getWinner.mock.calls[0]).toEqual(["onur", "oguz"]);
});

utilsMock.getWinner.mockReset();
