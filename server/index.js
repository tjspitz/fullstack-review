const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static('client/dist'));

app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('server POST req: ', req.body);
  res.sendStatus(200); // TEMP
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
