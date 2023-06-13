import React,{useState} from 'react'
import "./Home.css"
import GenerateForm from '../Generate Form/GenerateForm'
import ResultSec from '../ResultSec/ResultSec'

const Home = () => {
    const [passWord, setPassword] = useState()
    console.log(passWord)
  
    const getPfromChild =(data)=>{
      setPassword(data)
    }
  return (
    <div className='homeSection'>
      <ResultSec presult ={passWord}/>
      <GenerateForm getPfromChild={getPfromChild}/>
    </div>
  )
}

export default Home
