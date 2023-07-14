const axios = require('axios');
const config = require('../config.js');

const getReposByUsername = (gitHandle) => {
  const options = {
    url: `https://api.github.com/users/${gitHandle}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`,
    },
  };

  return axios.get(options.url, options)
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
