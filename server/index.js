const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

const getReposByUsername = require('../helpers/github.js');


// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(morgan('dev'))
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // the req is an obj, the req.body is too, go to the prop whose val is...
  // a string!
  
  getReposByUsername.getReposByUsername(req.body.searchTerm);

  console.log(`POST in server/index.js: ${req.body.searchTerm}`);
  // console.log('res: ', res);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos


  console.log(`GET in server/index.js: ${req.body}`);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

