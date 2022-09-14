import React from 'react';
import { useEffect, useState } from 'react';
function NasaApi() {
  const[explanation,setExplanation]=useState('');
  const[url,setUrl]=useState('');
  const[isReady,setIsReady]=useState(false)
  useEffect(()=>{
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response=>response.json())
    .then(data=>{
      setExplanation(data.explanation);
      setUrl(data.url);
      setIsReady(true);
    })
    .catch(err=>console.log(err))
  },[])
  if(!isReady)
  return <div>Loading...</div>
  return (
    <div className="App">
     <p>{explanation}</p>
     <img alt="pic nasa" src={url}/>
    </div>
  );
}

export default NasaApi;