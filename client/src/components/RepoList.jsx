import React, { useState, useEffect } from 'react';
import SingleRepo from './SingleRepo.jsx';

const RepoList = ({ repos, getTop25 }) => {
  // ADDITIONAL SORTING TRICKS FOR SOME DAY
  // const [fetchedRepos, setFetchedRepos] = useState(repos);
  // const [repoSort, setRepoSort] = useState('stars');

  // useEffect(() => {
  //   const sortedRepos = fetchedRepos.slice().sort((a, b) => a[repoSort] - b[repoSort]);
  //   setFetchedRepos(sortedRepos);
  // }, [repoSort]);

  // const handleSortingClick = (e) => {
  //   e.preventDefault();
  //   setRepoSort(e.target.innerText.toLowerCase());
  // };

  return (
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
              <th>
                <button onClick={null}>Forks</button></th>
              <th>
                <button onClick={null}>Stars</button></th>
              <th>
                <button onClick={null}>Watched</button></th>
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
};

export default RepoList;
