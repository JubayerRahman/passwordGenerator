import React, { useState } from 'react';
import './App.css';
import GenerateForm from './Components/Generate Form/GenerateForm';
import Dev from './Components/Dev/Dev';
import ResultSec from './Components/ResultSec/ResultSec';

function App() {
  const [passWord, setPassword] = useState()
  console.log(passWord)

  const getPfromChild =(data)=>{
    setPassword(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <ResultSec presult ={passWord}/>
        <GenerateForm getPfromChild={getPfromChild}/>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
