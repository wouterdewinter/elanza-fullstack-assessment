const express = require('express');
const app = express();

app.get('/api/name', function (req, res) {
  return res.json('sunshine');
});

app.listen(process.env.PORT || 8080);