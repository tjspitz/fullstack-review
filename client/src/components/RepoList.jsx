import React from 'react';
// also need to render repos...

const RepoList = ({ repos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
  </div>
);

export default RepoList;
