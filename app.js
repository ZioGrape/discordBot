require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/testRouter');
const {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
  verifyKeyMiddleware,
} = require('discord-interactions');

const app = express();
app.use(morgan('dev'));
app.use('/test',router);
const PORT = process.env.PORT || 8080;

//TODO: change to DB later
const activeGames = {};

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
