import React, { useEffect, useState } from 'react'
import "./DiaLog.css"

const DiaLog = () => {
    const [dialogClass, setdialogClass] = useState("showDialog")
    useEffect(()=>{
        setInterval(()=>{
            setdialogClass("hideDialog")
        },5000)
    },[])
  return (
    <div className={dialogClass}>
      <p>hello welcome to password generator, To save any password you like plese click the passwor button twice for the first time</p>
    </div>
  )
}

export default DiaLog
