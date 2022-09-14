import React, { useEffect, useState } from 'react';
function UserProfile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(resData => setUsers(resData.data))
  }, []);

  return (
    <div className='App'>
    <div className='container'>
      <table >
        <tbody >
        {
          users.map((user, index) => 
           <tr key={index}>
             <td>{<img src={user.avatar}></img>}</td>
             <td>{user.first_name}</td>
             <td>{user.last_name}</td>
             <td>{user.email}</td>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
     </div>
  );
}

export default UserProfile;