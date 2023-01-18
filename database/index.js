const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

/*
repo._id ------ mongoose-provided, unique, auto-incrementing | NUM
repo.owner.id --- specific to user | NUM
repo.full_name --- to display of 1) username, 2) repo name | TEXT
repo.id ------ user's specific repo ID --- filtering, maybe | NUMBER
repo.owner.avatar_url ------ to make display more pretty? | TEXT
repo.html_url ------ provide link to actual repo? | TEXT
repo.forks_count ------ filtering, maybe | NUM
repo.watchers_count ------ filtering, maybe | NUM
*/

// By default, Mongoose adds an _id property to your schemas.
let repoSchema = mongoose.Schema({
  userId: Number,
  fullName: String,
  repoId: Number,
  pic: String,
  link: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

}

module.exports.save = save;