import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaPenClip } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { BsArrowBarRight } from "react-icons/bs";

import { signOut } from 'firebase/auth';
import { database } from './Modules/FireBaseConfig';

function Nav({logo, setLoginState}) {
  
  const [showForYou, setshowForYou] = useState(true)
  const [showLibrary, setshowLibrary] = useState(false)
  const [showActiveForYou, setshowActive] = useState("rgba(0, 205, 21, 0.661)")
  const [showActiveLibrary, setshowActiveLibrary] = useState("")

  function ShowForYou(){
    if(!showForYou){
      setshowForYou(true)
      setshowActive("rgba(0, 205, 21, 0.661)")

      setshowActiveLibrary(" ")
      setshowLibrary(false)
    }
  }

  function ShowLibrary(){
    if(!showLibrary){
      setshowLibrary(true)
      setshowActiveLibrary("rgba(0, 205, 21, 0.661)")

      setshowActive(" ")
      setshowForYou(false)
    }
  }



  const handleSigningOut = () => {
    signOut(database).then(val =>{
      console.log("logged out")
    })
  }

  return (
    <nav>
    <div className='nav__logo'><img src={logo} alt="" /></div>
    <div className='nav__section'>
      <div className='nav__section__text'>

          <Link to={"/for-you"}>
            <div onClick={ShowForYou}>
              <div className='for-you-active' style={{ backgroundColor: `${showActiveForYou}` }}></div>
              <i><AiOutlineHome /></i> 
              <p>For You</p>
            </div>
          </Link>

          <Link to={"/library"}>
            <div onClick={ShowLibrary}>
              <div className='library-active' style={{ backgroundColor: `${showActiveLibrary}` }}></div>
              <i><IoBookmarkOutline /></i> 
              <p>My Library</p>
            </div>
          </Link>
          <div><div className='inactive-state'></div><i><FaPenClip /></i> <p>Highlights</p></div>
          <div><div className='inactive-state'></div><i><RxMagnifyingGlass /></i> <p>Search</p></div>
      </div>
      <div className='nav__section__text'>
          <Link to={"/settings"}>
            <div><div className='active-state'></div><i><GoGear /></i> <p>Settings</p></div>
          </Link>
          
          <div><div className='inactive-state'></div><i><GoQuestion /></i> <p>Help & Support</p></div>
          <div onClick={handleSigningOut}><div className='active-state'></div><i><BsArrowBarRight /></i> <p>Logout</p></div>
      </div>
    </div>
  </nav>
  )
}

export default Nav