const { Router } = require('express');
const router = new Router();
const responses = require('../helpers/responsesDict');
const { verifyKeyMiddleware } = require('discord-interactions');
router.post(
  '/',
  verifyKeyMiddleware(process.env.PUBLIC_KEY),
  async function (req, res) {
    console.log(req.body);
    const commandData = req.body.data;
    const { id, name, type } = commandData;
    typeof responses[name] === 'function'
      ? res.json(responses[name](name))
      : res.json(responses[name]);
  }
);

module.exports = router;
