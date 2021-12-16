const omitUnsafe = require("../omitUnsafe");

test("should return user with username, email and token values", () => {
  const safeUser = {
    username: "onur",
    email: "onurpolatplt@gmail.com",
    token: "qwertyuiopasdfgh",
  };
  const unsafeUser = {
    ...safeUser,
    salt: "qwertyu",
    hash: "qwertyuiol;kjhgf",
  };

  expect(omitUnsafe(unsafeUser)).toEqual(safeUser);
});
