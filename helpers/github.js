const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (searchTerm) => {

  let options = {
    url: `https://api.github.com/users/${searchTerm}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // RETURN the async request, data, etc.
  return axios.get(options.url, options)
    .then(repos => {
      console.log('\nSUCCESS in helpers/github.js!')
      return repos;
    })
    .catch(error => console.log('\nERROR in helperds/github.js: ', error))

  // SOLUTION VID DOES NOT USE AXIOS...?
  // request(options, (err, response, body) => {
  //   body = JSON.parse(body);
  //   if (err) console.log(err);
  //   else callback(body)
  // })

};

module.exports.getReposByUsername = getReposByUsername;