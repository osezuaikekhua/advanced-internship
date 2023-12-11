import React from 'react'
import { FcGoogle } from "react-icons/fc";

function SignIn({showLogIn}) {
  return (
    <>
        <div className='module__input'>
            <h2>Sign up to Summarist</h2>
            <button className='module__login__google'> <div className='google-icon'><FcGoogle /></div> Sign up with Google</button>
            <input id='signUp__email' type="text" placeholder='Email Address' />
            <input id='signUp__password' type="text" placeholder='Password'/>
            <button className='btn' >Sign up</button>
          </div>
          <br />
          <div className='signUp__link' onClick={showLogIn}>Already have an account</div>
    </>
  )
}

export default SignIn