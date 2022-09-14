import React, { useState } from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function Tarvia() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      setUser(resData.results[0]);
    })
  };

  return (
    <div className='App'>
    <div className='container'>
       <br/>
       <br/>
       <br/>
      <div id='para'>
      <p>{user.question} </p>
     <Button variant="contained" onClick={fetchData} endIcon={<NavigateNextIcon />}>
      Next Question
     </Button>
     </div>
    </div>
    </div>
  );
}

export default Tarvia;