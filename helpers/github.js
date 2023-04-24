const axios = require('axios');
const config = require('../config.js');

const getReposByUsername = (gitHandle) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  const options = {
    url: `https://api.github.com/users/${gitHandle}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`
    }
  };

  return axios.get(options)
    .then((data) => {
      console.log('github.js success: ', data);
      return data;
    })
    .catch((err) => {
      console.error('github.js error: ', err);
      return err;
    });
};

module.exports.getReposByUsername = getReposByUsername;
