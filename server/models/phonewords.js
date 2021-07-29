const {letterCombinations} = require("../helpers/letterCombinations");

module.exports = class PhoneWords {
  static fetchWords(digits, cb) {
    return cb(letterCombinations(digits));
  }
};
