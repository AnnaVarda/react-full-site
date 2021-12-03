import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';

function App() {
  return (
  <div>
    
      <Navbar />
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route path='/services' element= {<Services/>} />
      </Routes>
    
  </div>
  );
}

export default App;
