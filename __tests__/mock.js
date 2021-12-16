const { expect } = require("@jest/globals");

test("mock function ", () => {
  const myMock = jest.fn();
  myMock("first", "second");
  const calls = myMock.mock.calls;
  const firstCall = calls[0];
  const firstArg = firstCall[0];
  const secondArg = firstCall[1];
  expect(myMock).toHaveBeenCalledTimes(1);
  expect(myMock).lastCalledWith("first", "second");
  expect(firstArg).toBe("first");
  expect(secondArg).toBe("second");
});
