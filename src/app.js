const express = require('express');
const app = express();
const port = process.env.PORT || 5052;

app.get('/isWorking', (req, res) => {
  res.send('OK');
});

app.get('/api/v1/data', (req, res) => {
  res.send({
    app: {
      id: 'hello-world',
      version: '1',
    },
    user: {
      name: 'admin',
      email: 'someone@example.com',
      isVerified: true,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
