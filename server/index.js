const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const db = require('../database')
const gitHelp = require('../helpers/github.js');

app.use(morgan('dev'))
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/repos', function (req, res) {

  // ================= SOLUTION VID IDEAS =================

  // gitHelp.getReposByUsername(req.body.searchTerm)
    // db.save(data)
    // .then( () => res.sendStatus(201))
    // .then((data) => db.save(data))

  // ================= PRE-VID IDEAS =================

  gitHelp.getReposByUsername(req.body.searchTerm)
    .then(repos => {
      // console.log('response in THEN of server/index.js: ', response)
      db.save(repos.data)
      console.log('\nSUCCES in server/index.js! ');
    })
    .then(res => res)
    .catch(err => console.log('\nERROR in server/index.js: ', err))

});

app.get('/repos', function (req, res) {

// ================= SOLUTION VID IDEAS =================
  // db.find({})
  //   .sort('-forks')
  //   .limit(25)
  //   .exec()
  //   .then((repos) => {
  //     res.send(repos);
  //   })
  //   .catch((err) => {
  //     console.log('Error querying mongoBD!');
  //   })


  console.log(`GET in server/index.js: ${req.body}`);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

