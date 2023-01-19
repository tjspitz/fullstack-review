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
  userId: { type: Number, unqiue: true },
  fullName: String,
  repoId: Number,
  pic: String,
  link: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // ========= SOLUTION VID IDEAS ================
  // it is async, therefore, return a Promise...

  // Repo has a create method - creates an array of doc (repo) objs

  console.log('repos in database/index.js: ', repos)

  let mappedRepos = repos.map(repo => {
    return {
      userId: repo.owner.id,
      fullName: repo.full_name,
      repoId: repo.id,
      pic: repo.owner.avatar_url,
      link: repo.html_url,
      forks: repo.forks_count,
      watchers: repo.watchers_count
    };
  })

  return Repo.create(mappedRepos);

  // or, you can return a Promise for all the repos, mapping each new Repo & saving it

  // ================= PRE-VID TRY =================
  // will get an array of repo objects to deal with
  // create a 'newRepo' doc for each repo obj that does not already exist

  // repos.forEach((repo, userId) => {
    // should I overwite _id with the userId? for uniqueness?
    // const newRepo = new Repo({
  // });

  //   newRepo.save()

  // })

}

module.exports.save = save;