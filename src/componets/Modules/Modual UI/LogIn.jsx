import React, { useState } from 'react'


import { GiCharacter } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";

import { Link } from 'react-router-dom';


function LogIn({showSignIn, resetPass }) {

  const [link, setLink] = useState(" ")


  function signUp(){
    let requiredEmail = "1234"
    let requiredPassword = "abcd"

    let emailInput = document.querySelector("#signUp__email")
    let passwordInput = document.querySelector("#signUp__password")

    if(emailInput.value === requiredEmail && passwordInput.value === requiredPassword){
        console.log("correct password")
        setLink("for-you")
    }else{
      console.log("Incorrect information")
    }
  }




  return (
    <>
        <div className='module__input'>
            <h2>Log in to Summarist</h2>
            <button className='module__login__guest'> <div className='guest-icon'><GiCharacter /></div> Login as a Guest</button>
            <button className='module__login__google'> <div className='google-icon'><FcGoogle /></div> Login with Google</button>
            <input id='signUp__email' type="text" placeholder='Email Address' />
            <input id='signUp__password' type="text" placeholder='Password'/>
            
            <Link to={`/${link}`}><button className='btn' onClick={signUp}>  Login </button></Link> 
        </div>
        
          <div className='forget__password' onClick={resetPass}>Forgot your password?</div>
          <div className='signUp__link' onClick={showSignIn}>Don't have an account</div>
    </>
  )
}

export default LogIn