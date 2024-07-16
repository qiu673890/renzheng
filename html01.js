const express = require('express');
const app = express();

app.get('/api/timestamp', (req, res) => {
  const input = req.query.input;

  // 检查输入是否为数字（可能是 Unix 时间戳）
  if (!isNaN(input)) {
    const date = new Date(parseInt(input) * 1000);
    res.send(date.toISOString());
  } else {
    // 尝试将输入解析为日期
    const date = new Date(input);
    if (!isNaN(date.getTime())) {
      res.send(Math.floor(date.getTime() / 1000));
    } else {
      res.status(400).send('无效的输入');
    }
  }
});

app.listen(3000, () => {
  console.log('服务器在 3000 端口运行');
});
