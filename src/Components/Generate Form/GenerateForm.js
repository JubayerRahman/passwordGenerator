import React, { useEffect, useState } from 'react'
import "./GenerateForm.css"

const GenerateForm = (props) => {
    const [range, setrange] = useState(10)
    const [per, setPer] = useState()
    const [stengthD, setStrengthD] = useState()
    const  [stageBox1C, setstageBox1C] = useState("StrengthBox1")
    const  [stageBox2C, setstageBox2C] = useState("StrengthBox2")
    const  [stageBox3C, setstageBox3C] = useState("StrengthBox3")
    const  [stageBox4C, setstageBox4C] = useState("StrengthBox4")
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    const numbers   = "1234567890123456789012345678901234567890123456789012"
    const symbol    = "!@#$%^&*()_+=[]{};':\|/!@#$%^&*()_+=[]{};':\|/;':\|/"
    const [check1, setCheck1] = useState(false) 
    const [check2, setCheck2] = useState(false) 
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const getChange=(e)=>{
        setrange(parseFloat(e.target.value))
      }
    const GetCheck1 = ()=>{
      if(check1==false){
        setCheck1(true)
      }
      if(check1==true){
        setCheck1(false)
      }
    }
    const GetCheck2 = ()=>{
      if(check2==false){
        setCheck2(true)
      }
      if(check2==true){
        setCheck2(false)
      }
    }
    const GetCheck3 = ()=>{
      if(check3===false){
        setCheck3(true)
      }
      if(check3===true){
        setCheck3(false)
      }
    }
    const GetCheck4 = ()=>{
      if(check4===false){
        setCheck4(true)
      }
      if(check4===true){
        setCheck4(false)
      }
    }
      let percent
      useEffect(()=>{
        const max = 32;
        percent = (range /max) * 100
        setPer(percent)
      },[range])
      const generetePassword =()=>{
        let uCase =""
        let lCase =""
        let num =""
        let sym =""
        let allPass= ""
        if(check1 === false && check2 === false && check3===false && check4===false){
          alert("What are you doing bro? Select atlist one option")
        }
        if(range===0){
          alert("what are you doing bro? raise your range from 0")
        }
        if(check1 === true){
          for (let i = 0; i < range; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            uCase += upperCase[randomIndex]
          }
          props.getPfromChild(uCase)
        }
        if(check2 === true){
          for (let i = 0; i < range; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            lCase += lowerCase[randomIndex]
          }
          props.getPfromChild(lCase)
        }
        if(check3 === true){
          for (let i = 0; i < range; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            num += numbers[randomIndex]
          }
          props.getPfromChild(num)
        }
        if(check4 === true){
          for (let i = 0; i < range; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            sym += symbol[randomIndex]
          }
          props.getPfromChild(sym)
        }
        if(check1 && check2 && check3 && check4){
          const rangeDevide = Math.floor(range/ 4)
          const rangeDifferance = range - (rangeDevide*4)
          console.log("Difference: "+rangeDifferance)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+rangeDifferance ); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1 && check2 && check3===false && check4===false) {
          const rangeDevide = Math.floor(range/ 2)
          const rangeDifferance = range - (rangeDevide*2)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1===false && check2 && check3===false && check4) {
          const rangeDevide = Math.floor(range/ 2)
          const rangeDifferance = range - (rangeDevide*2)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1 && check2===false && check3 && check4===false) {
          const rangeDevide = Math.floor(range/ 2)
          const rangeDifferance = range - (rangeDevide*2)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1 && check2===false && check3===false && check4) {
          const rangeDevide = Math.floor(range/ 2)
          const rangeDifferance = range - (rangeDevide*2)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1===false && check2 && check3 && check4===false) {
          const rangeDevide = Math.floor(range/ 2)
          const rangeDifferance = range - (rangeDevide*2)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1===false && check2===false && check3 && check4) {
          const rangeDevide = Math.floor(range/ 2)
          const rangeDifferance = range - (rangeDevide*2)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1 && check2 && check3 && check4===false) {
          const rangeDevide = Math.floor(range/ 3)
          const rangeDifferance = range - (rangeDevide*3)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1 && check2 && check3===false && check4) {
          const rangeDevide = Math.floor(range/ 3)
          const rangeDifferance = range - (rangeDevide*3)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1 && check2===false && check3 && check4) {
          const rangeDevide = Math.floor(range/ 3)
          const rangeDifferance = range - (rangeDevide*3)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += upperCase[randomIndex]
          }
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }
        if (check1===false && check2 && check3 && check4) {
          const rangeDevide = Math.floor(range/ 3)
          const rangeDifferance = range - (rangeDevide*3)
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += lowerCase[randomIndex]
          }
          for (let i = 0; i < rangeDevide; i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += numbers[randomIndex]
          }
          for (let i = 0; i < (rangeDevide+ rangeDifferance); i++) {
            const randomIndex = Math.floor(Math.random() * range)
            allPass += symbol[randomIndex]
          }
          props.getPfromChild(allPass)
        }

        // stage theme
        if(allPass<6){
          setStrengthD("Too Weak!")
          setstageBox1C("StrengthBox1Color")
          setstageBox2C("StrengthBox1")
          setstageBox3C("StrengthBox1")
          setstageBox4C("StrengthBox1")
        }
        if(range>6 && range<9 && check1 || check2 || check3 || check4){
          setStrengthD("Too Weak!")
          setstageBox1C("StrengthBox1Color")
          setstageBox2C("StrengthBox1")
          setstageBox3C("StrengthBox1")
          setstageBox4C("StrengthBox1")
        }
        if(range>9 && check1 || check2 || check3 || check4){
          setStrengthD("Weak!")
          setstageBox1C("StrengthBox1Color")
          setstageBox2C("StrengthBox1Color")
          setstageBox3C("StrengthBox1")
          setstageBox4C("StrengthBox1")
        }
        if(range<6 && check1 && check2 ||check2 && check3 || check3 && check4 || check2 && check4 || check1 && check4 || check1 && check3 ){
          setStrengthD("Too Weak!")
          setstageBox1C("StrengthBox1Color")
          setstageBox2C("StrengthBox1")
          setstageBox3C("StrengthBox1")
          setstageBox4C("StrengthBox1")
        }
        if(range>6 && range<9 && check1 && check2 ||check2 && check3 || check3 && check4 || check2 && check4 || check1 && check4 || check1 && check3 ){
          setStrengthD("Weak!")
          setstageBox1C("StrengthBox1Color")
          setstageBox2C("StrengthBox1Color")
          setstageBox3C("StrengthBox1")
          setstageBox4C("StrengthBox1")
        }
        if(range>9 && check1 && check2 ||check2 && check3 || check3 && check4 || check2 && check4 || check1 && check4 || check1 && check3 ){
          setStrengthD("Medium")
          setstageBox1C("StrengthBox3Color")
          setstageBox2C("StrengthBox3Color")
          setstageBox3C("StrengthBox3Color")
          setstageBox4C("StrengthBox1")
        }
        if(range>9 && check1 && check2 && check3 ||check2 && check3 && check4 || check1 && check2 && check4 || check2 && check4 || check1 && check4 || check1 && check3 ){
          setStrengthD("strong")
          setstageBox1C("StrengthBox4Color")
          setstageBox2C("StrengthBox4Color")
          setstageBox3C("StrengthBox4Color")
          setstageBox4C("StrengthBox4Color")
        }
        // last Section
      }
  return (
    <div className='generateForm'>
      <div className='charecterL'>
        <h3>Character Length</h3>
        <h1>{range}</h1>
      </div>
      <div className='ranges'>
        <div style={{
          background: 'rgb(163,255,174)',
          height: '5px',
          borderRadius: "15px",
          outline: 'none',
          position: 'absolute',
          zIndex: '2',
          width: `${per}%`
        }} className='range2'></div>
      <input  className='inpRange' type='range' value={range} max='32' onChange={getChange}/>
      </div>
      <div className='checkPoints'>
          <div className='uCanse' >
          <input id='uppercsae' className='uppercsae' type='checkbox' value={check1} onClick={GetCheck1}/>
          <label htmlFor='uppercsae' >Include Uppercase Letters</label>
          </div>
          <div className='Lcase'>
          <input id='Lowercase' className='Lowercase' type='checkbox'  value={check2} onClick={GetCheck2} />
          <label htmlFor='Lowercase'>Include Lowercase Letters</label>
          </div>
          <div className='num'>
          <input id='Numbers' className='Numbers' type='checkbox' value={check3} onClick={GetCheck3} />
          <label htmlFor='Numbers' >Include Numbers</label>
          </div>
          <div className='symbol'>
          <input id='Symbols' className='Symbols' type='checkbox' value={check4} onClick={GetCheck4} />
          <label htmlFor='Symbols'>Include Symbols</label>
          </div>
      </div>
      <dvi className="stage">
        <h4>STRENGTH</h4>
        <div className='strengthBoxs'>
          <div className='boxes'>
          <h3 className='stageDialog'>{stengthD}</h3>
          <div className={stageBox1C}></div>
          <div className={stageBox2C}></div>
          <div className={stageBox3C}></div>
          <div className={stageBox4C}></div>
          </div>
        </div>
      </dvi>
      <button onClick={generetePassword} className='generatebutton'>Generate <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default GenerateForm
