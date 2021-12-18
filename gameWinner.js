const utils = require("./utils");

const gameWinner = (player1, player2) => {
  let player1GameWinner = 0;
  let player2GameWinner = 0;
  const winnerCount = 3;
  while (player1GameWinner < winnerCount && player2GameWinner < winnerCount) {
    const winner = utils.getWinner(player1, player2);
    winner === player1 ? player1GameWinner++ : player2GameWinner++;
  }
  if (player1GameWinner === winnerCount || player2GameWinner === winnerCount) {
    return player1GameWinner > player2GameWinner ? player1 : player2;
  }
};

module.exports = gameWinner;
