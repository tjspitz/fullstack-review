const axios = require('axios');
const config = require('../config.js');

const getReposByUsername = (/* TODO */) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  const options = {
    url: 'https://api.github.com',
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`
    }
  };
};

module.exports.getReposByUsername = getReposByUsername;
