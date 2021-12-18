const getWinner = (p1, p2) => {
  return Math.random() >= 0.5 ? p1 : p2;
};

module.exports = { getWinner };
