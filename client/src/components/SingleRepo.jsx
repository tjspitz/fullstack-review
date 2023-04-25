import React from 'react';

const SingleRepo = ({ repo }) => {
  const { profileUrl, avatarUrl, fullName, repoUrl, forks, stars, watched } =
    repo;
  const handle = fullName.split('/')[0];
  const repoName = fullName.split('/')[1];

  return (
      <tr>
        <td>
          <img src={avatarUrl} />
        </td>
        <td>
          <a href={profileUrl}>{handle}</a>
        </td>
        <td>
          <a href={repoUrl}>{repoName}</a>
        </td>
        <td>{forks} Forks</td>
        <td>{stars} Stars</td>
        <td>{watched} Watchers</td>
      </tr>
  );
};

export default SingleRepo;
