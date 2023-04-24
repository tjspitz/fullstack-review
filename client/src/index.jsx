import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {
  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);

    const url = 'http://localhost:1128/repos';

    $.ajax({
      type: 'POST',
      url,
      data: JSON.stringify({ term }),
      contentType: 'application/json',
      success: (data) => console.log('client POST success: ', data),
      error: (err) => console.error(err)
    });

    // Oh hey axios...
    // axios.post(url, { term })
    //   .then((data) => console.log('client POST success: ', data))
    //   .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
