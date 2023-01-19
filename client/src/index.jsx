import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

import axios from 'axios';


const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {

    axios.post('/repos', {
      searchTerm: term
    })
    .then((res) => {
    //   return axios.get('/repos')
      return res
      console.log('axios post sent')
    })
    // .then((reponse) => {
    //   setRepos(response.data)
    // })
    .catch((error) => { console.log('axios post ERROR: ', error) })

    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:1128/repos',
    //   data: {searchTerm: term }, // <--- hrm?
    //   dataType: 'application/json',
    //   success: (req) => {
    //     console.log('Success! AJAX is a pain!', req);
    //   },
    //   error: (jqXHR, textStatus) => {
    //     let res = $.parseJSON(jqXHR.responseText);
    //     console.log('Booo, an error:', res);
    //   }
    // });

    // console.log(`${term} was searched`);
  };

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos} />
      <Search onSearch={search} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));