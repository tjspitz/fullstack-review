import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const url = 'http://localhost:1128/repos';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getTop25()
      .then((repoList) => {
        setRepos(repoList);
      })
      .catch((err) => console.error(err));
  }, [refresh]);

  const getTop25 = (filter = 'stars') => { // not using 'filter' right now
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
    $.ajax({
      type: 'POST',
      url,
      data: JSON.stringify({ term }),
      contentType: 'application/json',
      success: (status) => {
        setRefresh(!refresh);
      },
      error: (err) => console.error(err),
    });

    // Oh hey axios
    // axios.post(url, { term })
    //   .then((data) => console.log('client POST success: ', data))
    //   .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search} refresh={refresh} setRefresh={setRefresh} />
      <RepoList repos={repos} getTop25={getTop25} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
