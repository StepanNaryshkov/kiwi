const PhoneWords = require('../models/phonewords');

exports.getWords = async (req, res, next) => {
  PhoneWords.fetchWords(req.query.digits, (response) => res.send(response))
};
