const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use('/:Id', express.static('../public'));
app.use(bodyParser.json());
app.server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;