const omitUnsafe = (user) => {
  // {username, email, salt, hash, token, }
  const safeUser = {};
  ["username", "email", "token"].forEach((item) => {
    safeUser[item] = user[item];
  });
  return safeUser;
};

module.exports = omitUnsafe;
