import React, { useEffect, useState } from 'react'
import "./ResultSec.css"

const ResultSec = (props) => {
    const [copyICon , setcopyICon] = useState("fa-solid fa-copy")
    const [saveICon , setsaveICon] = useState("fa-regular fa-floppy-disk")
    const [passwordsArray , setpasswordsArray] = useState([])
    let pass ="P4$5W0rD!"
    const passData= (props.presult)
    if(passData===undefined){
        pass ="P4$5W0rD!"
    }
    else{
        pass =(props.presult)
      }
    console.log(passwordsArray)
    //fuctions
    //save function
    // const saveFunction= ()=>{
    //   setsaveICon("fa-solid fa-check");
    //   const newPass = [...passwordsArray, props.presult]
    //   setpasswordsArray(newPass)
    //   if(props.presult!==""){
    //     localStorage.setItem("passwords" , JSON.stringify(passwordsArray))
    //   }
    //   setInterval(()=>{
    //     setsaveICon("fa-regular fa-floppy-disk")
    //   },2000)
    // }
    //copy function
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
      {/* <button onClick={saveFunction} ><i class={saveICon}></i></button> */}
      <button onClick={setCopy}><i className={copyICon}></i></button>
    </div>
  )
}

export default ResultSec