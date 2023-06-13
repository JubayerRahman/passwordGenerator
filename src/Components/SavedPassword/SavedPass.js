import React, {useEffect, useState} from 'react'
import "./SavedPass.css"
import { Link } from 'react-router-dom'

const SavedPass = () => {
    const [copyICon , setcopyICon] = useState("fa-solid fa-copy")
    const password = JSON.parse(localStorage.getItem("passwords"))
    const [passArray, setpassArray] =useState([]);
  return (
    <div className='savePage'>
      <h1>Saved Password:</h1>
      <div className='paswordsP'>
      {password.map((itme, key)=>
      <div className='singleData'>
          <p>{key + 1}: {itme}</p>
          <div className='savePasswordButton'>
          <button onClick={()=>{
            navigator.clipboard.writeText(itme)
          }}><i className={copyICon}></i></button>
          </div>
      </div>
      )}
      </div>
      <button onClick={()=>{
            localStorage.clear();
          }}><Link className='deleteLink' to='/'><i className="fa-solid fa-trash"></i> Clear All</Link></button>
    </div>
  )
}

export default SavedPass
