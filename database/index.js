const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherTwo');

const repoSchema = mongoose.Schema({
  ownerId: Number, // overall owner's ID --> repo.owner.id
  profileUrl: String, // overall profile url -->  repo.owner.html_url
  avatarUrl: String, // profile pic --> repo.owner.avatar_url
  repoId: { // specific repo ID --> repo.id
    type: Number,
    unique: true,
  },
  fullName: String, // username/repo-name --> repo.full_name
  repoUrl: String, // the repo's url --> repo.html_url
  forks: Number, // forked # times (filtering) --> repo.forks
  stars: Number, // starred # times (filtering) --> repo.stargazers_count
  watched: Number, // watched # times (filtering) --> repo.watchers_count
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (allRepos) => Repo.create(...allRepos);

const get25 = (filter) => {
  // SOME DAY
  // const sortMethod = {};
  // sortMethod[filter] = -1;

  return Repo.find({})
    .sort('-stars')
    .limit(25)
    .exec()
    .then((data) => data)
    .catch((err) => err);
};

module.exports.save = save;
module.exports.get25 = get25;
