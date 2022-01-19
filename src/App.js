import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Fitness from './components/pages/Fitness';
import Dance from './components/pages/Dance';
import SignUp from './components/pages/SignUp';


function App() {
  return (
  <div>
    
      <Navbar />
      <Routes>
        <Route  path='/' element= {<Home/>} />
        <Route path='/fitness' element= {<Fitness/>} />
        <Route path='/dance' element= {<Dance/>} />
        <Route path='/sign-up' element= {<SignUp/>} />
      </Routes>
    
  </div>
  );
}

export default App;
