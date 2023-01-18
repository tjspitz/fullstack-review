const express = require('express');
let app = express();
const path = require('path');

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('a POST thing happened');
  console.log(req.body);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('a GET thing happened');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

