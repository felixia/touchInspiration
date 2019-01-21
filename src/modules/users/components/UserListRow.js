import React from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr>
		<td className="capitalize"><Link to={'/users/' + user.id}>{user.name}</Link></td>
		<td>{user.email}</td>
		<td>{user.bio}</td>
		<td>{user.occupation}</td>
		<td> </td>
	</tr>
  );
};


export default UserListRow;