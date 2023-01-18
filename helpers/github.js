const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (term) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, options)
    .then(response => console.log('github.js response data: ', response.data))
    .catch(error => console.log('github.js error: ', error));

}

module.exports.getReposByUsername = getReposByUsername;