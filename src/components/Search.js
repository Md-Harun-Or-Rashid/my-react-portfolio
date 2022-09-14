import React, { useState } from 'react';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
function SearchRepo() {
  const [users, setUsers] = useState([]);
  const [lastpart, setLastpart] = useState('')

  const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q=' + lastpart)
    .then(response => {
      if (response.status !== 200) {
      throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      setUsers(resData.items);
    })
  };

  const inputChanged = (event) => {
    setLastpart(event.target.value);
  }

  return (
    <div className='container'>
    <br/>
    <h1>Repositories Search on Github </h1>
    <br/>
    <Input placeholder=" Enter a keyword"  onChange={inputChanged}  style={{backgroundColor: "white"}} />
    <Button variant="contained" onClick={fetchData} endIcon={<SearchIcon/>}>
    Search
    </Button>
    <br/>
    <br/>
     <table >
    {
      users.map((user, index) => 
       <tr key={index}>
         <td>{user.full_name}</td>
         <td>{user.url}</td>
       </tr>
      )
    }
    </table>
    </div>
  );
}

export default SearchRepo;