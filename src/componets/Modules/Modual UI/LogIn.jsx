import React, { useState } from 'react'

import { GiCharacter } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";


function LogIn({showSignIn, resetPass, signUp}) {





  return (
    <>
        <div className='module__input'>
            <h2>Log in to Summarist</h2>
            <button className='module__login__guest'> <div className='guest-icon'><GiCharacter /></div> Login as a Guest</button>
            <button className='module__login__google'> <div className='google-icon'><FcGoogle /></div> Login with Google</button>
            <input id='signUp__email' type="text" placeholder='Email Address' />
            <input id='signUp__password' type="text" placeholder='Password'/>

            <button className='btn' onClick={signUp}>Login</button>
        </div>
        
          <div className='forget__password' onClick={resetPass}>Forgot your password?</div>
          <div className='signUp__link' onClick={showSignIn}>Don't have an account</div>
    </>
  )
}

export default LogIn