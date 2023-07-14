import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [users, setUsers] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getTop25()
      .then((repoList) => {
        setRepos(repoList);
        setUsers(makeUserList(repoList));
      })
      .catch((err) => console.error(err));
  }, [refresh]);

  const makeUserList = (allRepos) => {
    console.log(allRepos);
    const users = allRepos.map((repo) => repo.fullName.split('/')[0]);
    return new Set(users);
  };

  // not using 'filter' right now
  const getTop25 = (filter = 'stars') => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url,
        data: JSON.stringify({ filter }),
        dataType: 'json',
        success: (data) => resolve(data),
        error: (err) => reject(err),
      });
    });
  };

  const search = (term) => {
    console.log(`${term} was searched`);
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search} refresh={refresh} setRefresh={setRefresh} />
      <RepoList repos={repos} getTop25={getTop25} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
