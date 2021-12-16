const reverse = require("./reverse");

const anagram = (str) => {
  return str === reverse(str);
};

module.exports = anagram;
