import React from 'react'
import { useState } from 'react';
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

function Nav({logo, setLoginState}) {
  
  const [showForYou, setshowForYou] = useState(true)
  const [showLibrary, setshowLibrary] = useState(false)
  const [showSettings, setshowSettings] = useState(false)
  const [showActiveForYou, setshowActiveForyou] = useState("rgba(0, 205, 21, 0.661)")
  const [showActiveLibrary, setshowActiveLibrary] = useState("")
  const [showActiveSettings, setshowActiveSettings] = useState("")

  const location = useLocation()

  function ShowForYou(){
    if(!showForYou){
      setshowForYou(true)
      setshowActiveForyou("rgba(0, 205, 21, 0.661)")

      setshowActiveLibrary(" ")
      setshowLibrary(false)

      setshowSettings(false)
      setshowActiveSettings("")
    }
  }

  function ShowLibrary(){
    if(!showLibrary){
      setshowLibrary(true)
      setshowActiveLibrary("rgba(0, 205, 21, 0.661)")

      setshowActiveForyou(" ")
      setshowForYou(false)

      setshowSettings(false)
      setshowActiveSettings("")
    }
  }

  function ShowSettings(){
    if(!showSettings){
      setshowSettings(true)
      setshowActiveSettings("rgba(0, 205, 21, 0.661)")

      setshowActiveForyou(" ")
      setshowForYou(false)

      setshowActiveLibrary(" ")
      setshowLibrary(false)
    }
  }


  const handleSigningOut = () => {
    signOut(database).then(val =>{
      setLoginState(false)
    })
  }

  return (
    <nav>
    <div className='nav__logo'><img src={logo} alt="" /></div>
    <div className='nav__section'>
      <div className='nav__section__text'>

          <Link to={"/for-you"}>
            <div onClick={ShowForYou} className='access'>
              <div className='inactive-state' style={{ backgroundColor: `${showActiveForYou}` }}></div>
              <i><AiOutlineHome /></i> 
              <p>For You</p>
            </div>
          </Link>

          <Link to={"/library"} className='access'>
            <div onClick={ShowLibrary}>
              <div className='inactive-state' style={{ backgroundColor: `${showActiveLibrary}` }}></div>
              <i><IoBookmarkOutline /></i> 
              <p>My Library</p>
            </div>
          </Link>
          <div className='No-access'><div className='inactive-state'></div><i><FaPenClip /></i> <p>Highlights</p></div>
          <div className='No-access'><div className='inactive-state'></div><i><RxMagnifyingGlass /></i> <p>Search</p></div>
      </div>
      <div className='nav__section__text'>
          <Link to={"/settings"}>
            <div onClick={ShowSettings} className='access'>
              <div className='inactive-state' style={{ backgroundColor: `${showActiveSettings}` }}></div>
              <i><GoGear /></i>
              <p>Settings</p>
              </div>
          </Link>
          
          <div className='No-access'><div className='inactive-state'></div><i><GoQuestion /></i> <p>Help & Support</p></div>
          <div onClick={handleSigningOut} className='access'><div className='inactive-state'></div><i><BsArrowBarRight /></i> <p>Logout</p></div>
      </div>
    </div>
  </nav>
  )
}

export default Nav