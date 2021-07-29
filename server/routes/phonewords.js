const express = require('express');
const cors = require('cors');
const phoneWordsController = require("../controllers/phonewords");

const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000',
}

router.get('/phonewords', cors(corsOptions), phoneWordsController.getWords);

module.exports = router;
