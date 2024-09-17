const { Router } = require('express');
const router = new Router();
const {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
  verifyKeyMiddleware,
} = require('discord-interactions');

router.post(
  '/',
  verifyKeyMiddleware(process.env.PUBLIC_KEY),
  async function (req, res) {
    console.log(req.body);
    req.senc
  }
);

module.exports = router;
