import React from 'react';
import './App.css';
import Dev from './Components/Dev/Dev';
import Home from './Components/Home/Home';
import SavedPass from './Components/SavedPassword/SavedPass';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/savePass' element={<SavedPass/>}/>
        </Routes>
        <div className='Links'>
          <Link className='nevLink' to="/"><i class="fa-solid fa-house"></i></Link>
          <Link className='nevLink' to='/savePass'><i class="fa-regular fa-bookmark"></i></Link>
        </div>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
