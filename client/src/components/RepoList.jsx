import React from 'react';
import SingleRepo from './SingleRepo.jsx';

const RepoList = ({ repos }) => (
  <section>
    <div>
      <h4> Repo List Component </h4>
      There are {repos.length} repos.
    </div>
    <div>
      <table>
        <tbody>
          <tr>
            <th>Owner</th>
            <th>Handle</th>
            <th>Repo</th>
            <th>Forks</th>
            <th>Stars</th>
            <th>Watched</th>
          </tr>
          {repos.length &&
            repos.map((repo) => <SingleRepo key={repo.repoId} repo={repo} />)}
        </tbody>
      </table>
          {!repos.length && (
            <div>Hmm, try searching for a gitHub user in the search bar...</div>
          )}
    </div>
  </section>
);

export default RepoList;
