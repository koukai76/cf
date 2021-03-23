const express = require('express');
const axios = require('axios');

const app = express();

// postリクエスト使えるようにする
app.use(express.json({ extended: true, limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/get', async (req, res) => {
  try {
    const ret = await axios.get('http://httpbin.org/ip');

    // 今回はサーバのグローバルIPを返す
    res.send({ origin: ret.data.origin });
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT || 8080);

console.log('start');
