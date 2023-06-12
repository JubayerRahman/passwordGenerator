import React, { useState } from 'react'
import "./ResultSec.css"

const ResultSec = (props) => {
    const [copyICon , setcopyICon] = useState("fa-solid fa-copy")
    // setFinalP(props.presult)
    let pass ="P4$5W0rD!"
    const passData= (props.presult)
    if(passData===undefined){
        pass ="P4$5W0rD!"
    }
    else{
        pass =(props.presult)
    }
    const setCopy = ()=>{
      navigator.clipboard.writeText(pass)
      setcopyICon("fa-solid fa-check")
      setInterval(()=>{
        setcopyICon("fa-solid fa-copy")
      },3000)
    }
  return (
    <div className='resultmainDiv'>
      <h1 className='result'>{pass}</h1>
      {/* <h1 className="resultHide"></h1> */}
      <button onClick={setCopy}><i className={copyICon}></i></button>
    </div>
  )
}

export default ResultSec
