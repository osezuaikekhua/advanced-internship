import React from 'react'
import { useState } from 'react';


import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaPenClip } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { BsArrowBarRight } from "react-icons/bs";

function Nav({ShowForYou, ShowLibrary, showActiveLibrary, showActiveForYou, logo}) {


  return (
    <nav>
    <div className='nav__logo'><img src={logo} alt="" /></div>
    <div className='nav__section'>
      <div className='nav__section__text'>

          <div onClick={ShowForYou} >
            <div className='for-you-active' style={{ backgroundColor: `${showActiveForYou}` }}></div>
            <i><AiOutlineHome /></i> 
            <p>For You</p>
          </div>

          <div onClick={ShowLibrary} >
            <div className='library-active' style={{ backgroundColor: `${showActiveLibrary}` }}></div>
            <i><IoBookmarkOutline /></i> 
            <p>My Library</p>
          </div>

          <div><div className='inactive-state'></div><i><FaPenClip /></i> <p>Highlights</p></div>
          <div><div className='inactive-state'></div><i><RxMagnifyingGlass /></i> <p>Search</p></div>
      </div>
      <div className='nav__section__text'>
          <div><div className='active-state'></div><i><GoGear /></i> <p>Settings</p></div>
          <div><div className='inactive-state'></div><i><GoQuestion /></i> <p>Help & Support</p></div>
          <div><div className='active-state'></div><i><BsArrowBarRight /></i> <p>Logout</p></div>
      </div>
    </div>
  </nav>
  )
}

export default Nav