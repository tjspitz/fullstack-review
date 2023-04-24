const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherTwo');

const repoSchema = mongoose.Schema({
  ownerId: Number, // overall owner's ID --> repo.owner.id
  profileUrl: String, // overall profile url -->  repo.owner.html_url
  avatarUrl: String, // profile pic --> repo.owner.avatar_url
  repoId: Number, // specific repo ID --> repo.id
  fullName: String, // username/repo-name --> repo.full_name
  repoUrl: String, // the repo's url --> repo.html_url
  forks: Number, // forked # times (filtering) --> repo.forks
  stars: Number, // starred # times (filtering) --> repo.stargazers_count
  watched: Number // watched # times (filtering) --> repo.watchers_count
});

// eslint-disable-next-line no-unused-vars
const Repo = mongoose.model('Repo', repoSchema);

const save = (allRepos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  return Repo.create(...allRepos);
};

module.exports.save = save;
