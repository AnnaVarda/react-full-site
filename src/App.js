import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Fitness from './components/pages/Fitness';
import Dance from './components/pages/Dance';


function App() {
  return (
  <div>
    
      <Navbar />
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route  path='/about' element= {<About/>} />
        <Route path='/fitness' element= {<Fitness/>} />
        <Route path='/dance' element= {<Dance/>} />
        
      </Routes>
    
  </div>
  );
}

export default App;
