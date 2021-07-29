const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/phonewords');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(usersRoutes);

app.listen(3001);
