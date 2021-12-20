import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
  <div>
    
      <Navbar />
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route path='/services' element= {<Services/>} />
        <Route path='/sign-up' element= {<SignUp/>} />
      </Routes>
    
  </div>
  );
}

export default App;
