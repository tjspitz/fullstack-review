const express = require('express');
const app = express();
const path = require('path');
const { getReposByUsername } = require('../helpers/github.js');
const { save } = require('../database');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.term)
    .then(({ data }) => {
      const repos = data.map((repo) => ({
        ownerId: repo.owner.id,
        profileUrl: repo.owner.html_url,
        avatarUrl: repo.owner.avatar_url,
        repoId: repo.id,
        fullName: repo.full_name,
        repoUrl: repo.html_url,
        forks: repo.forks,
        stars: repo.stargazers_count,
        watched: repo.watchers_count
      }));
      save(repos);
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
