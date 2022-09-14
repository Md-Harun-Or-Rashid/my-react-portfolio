import React from 'react';   
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './ToDo'; 
import './index.css';
import About from './components/AboutMe';
import NasaApi from './components/NasaApi';
import Tarvia from './components/TarviaApi';
import UserProfile from './components/UserProfileApi';
import SearchRepo from './components/Search';

function Routing (){
    return(  
  <BrowserRouter>
    <div>   
    <div class="container mt-3">

    <ul class="nav nav-pills" role="tablist">

    <li class="nav-item">
      <Link to="/" class="nav-link" data-bs-toggle="pill" id="link">HOME</Link>
    </li>
    <li class="nav-item">
      <Link to ="/ToDo" class="nav-link" data-bs-toggle="pill" id="link" >TODO APP</Link>
    </li>
    <li class="nav-item">
    <Link to ="/Tarvia" class="nav-link" data-bs-toggle="pill" id="link">RANDOM QUESTIONS APP</Link>
    </li>
    <li class="nav-item">
    <Link to ="/NasaApi" class="nav-link" data-bs-toggle="pill" id="link">OUR UNIVERSE APP</Link>
    </li>
    <li class="nav-item">
    <Link to ="/UserProfile" class="nav-link" data-bs-toggle="pill" id="link" >USER PROFILE APP</Link>
    </li>
    <li class="nav-item">
    <Link to ="/SearchRepo" class="nav-link" data-bs-toggle="pill" id="link" >API SEARCH APP</Link>
    </li>
    </ul>
    
      </div>
      <Routes>
      <Route path="/" element={<About/>} /> 
      <Route path="/ToDo" element={<ToDo/>} />   
      <Route path="/NasaApi" element={<NasaApi/>} /> 
      <Route path="/Tarvia" element={<Tarvia/>} />
      <Route path="/UserProfile" element={<UserProfile/>}/>
      <Route path="/SearchRepo" element={<SearchRepo/>}/>
      </Routes> 
      </div>

  </BrowserRouter>
) }
export default Routing;