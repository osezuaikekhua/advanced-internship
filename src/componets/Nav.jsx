import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaPenClip } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { BsArrowBarRight } from "react-icons/bs";

import { signOut } from 'firebase/auth';
import { database } from './Modules/FireBaseConfig';

import { Context } from '../App';

function Nav({logo}) {
  


  const { loginState } = useContext(Context)
  const { setLoginState } = useContext(Context)
  const { showModule } = useContext(Context)

  const location = useLocation()


  const tabLinks = document.querySelectorAll('.access')

  function Tabs () {
    const links = document.querySelectorAll(".access")
    
    links.forEach( tab =>{
      tab.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        tab.classList.add('active')
      })
    })
  }


  const handleSigningOut = () => {
    signOut(database).then(val =>{
      setLoginState(false)
    })
  }

  useEffect(() => {
    Tabs()
  })



  return (
    <nav>
    <div className='nav__logo'><img src={logo} alt="" /></div>
    <div className='nav__section'>
      <div className='nav__section__text'>

          <Link to={"/for-you"}>
            <div className='access active'>
              <div className='inactive'></div>
              <i><AiOutlineHome /></i> 
              <p>For You</p>
            </div>
          </Link>

          <Link to={"/library"} >
            <div className='access'>
              <div className='inactive'></div>
              <i><IoBookmarkOutline /></i> 
              <p>My Library</p>
            </div>
          </Link>
          <div className='No-access'><div className='never-active'></div><i><FaPenClip /></i> <p>Highlights</p></div>
          <div className='No-access'><div className='never-active'></div><i><RxMagnifyingGlass /></i> <p>Search</p></div>
      </div>
      <div className='nav__section__text'>
          <Link to={"/settings"}>
            <div className='access'>
              <div className='inactive'></div>
              <i><GoGear /></i>
              <p>Settings</p>
              </div>
          </Link>
          
          <div className='No-access'><div className='never-active'></div><i><GoQuestion /></i> <p>Help & Support</p></div>

          {
            loginState ?
            <div onClick={handleSigningOut} className='extra-access'><div className='never-active'></div><i><BsArrowBarRight /></i> <p>Log out</p> </div>
            :
            <div onClick={showModule} className='extra-access'><div className='never-active'></div><i><BsArrowBarRight /></i> <p>Log in</p> </div>
          }
          
      </div>
    </div>
  </nav>
  )
}

export default Nav