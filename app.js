require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const createCommand = require('./helpers/createCommands');
const router = require('./routes/discordSlashCommands');

const app = express();
app.use(morgan('dev'));
app.use('/discord', router);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  createCommand();
  console.log('Listening on port', PORT);
});
