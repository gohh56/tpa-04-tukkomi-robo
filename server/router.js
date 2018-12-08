const express = require('express');
const getRandomTukkomi = require('./get-random-tukkomi.js');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  console.log('phrase = ', phrase);
  //
  // TODO
  //
  // if phrase が空っぽだったらエラーメッセージを送ろう。
  // else phrase にツッコミを追加して送ろう。 (HINT: get-random-tukkomi.js が役に立つかも）
  if (phrase === '') {
    res.send('入力欄が空っぽです。');
  } else {
    res.send(`${phrase}...って、${getRandomTukkomi()}`);
  }
});

module.exports = tukkomiRoboRouter;
