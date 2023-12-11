import React, { useState } from 'react'
import LogIn from './Modual UI/LogIn';
import SignIn from './Modual UI/SignIn';
import ResetPassword from './Modual UI/ResetPassword';

import { MdClose } from "react-icons/md";



function Modual({showModule}) {


  const [showLogIn, setShowLogIn] = useState(true)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showResetPass, setResetPass] = useState(false)



  function ShowSignIn(){
    if(!showSignIn){
      setShowSignIn(true)

      setShowLogIn(false)
      setResetPass(false)
    }
  }

  function ShowLogIn(){
    if(!showLogIn){
      setShowLogIn(true)

      setShowSignIn(false)
      setResetPass(false)
    }
  }

  function ResetPass(){
    if(!showResetPass){
      setResetPass(true)

      setShowSignIn(false)
      setShowLogIn(false)
    }
  }



  function signUp(){
    let requiredEmail = "1234"
    let requiredPassword = "abcd"

    let emailInput = document.querySelector("#signUp__email")
    let passwordInput = document.querySelector("#signUp__password")

    if(emailInput.value === requiredEmail && passwordInput.value === requiredPassword){
        console.log("correct password")
    }else{
      console.log("Incorrect information")
    }
  }

  return (
    <div className='module__background'>
       <div className='module__login module__container'>
          <div className='module__close'><h1 onClick={showModule}><MdClose /></h1></div>
          
          { showLogIn && <LogIn showSignIn = {ShowSignIn} resetPass = {ResetPass} signUp = {signUp} />}
          { showSignIn && <SignIn showLogIn = {ShowLogIn} />}
          { showResetPass && <ResetPassword showLogIn = {ShowLogIn} /> }

       </div>
    </div>
    
  )
}

export default Modual