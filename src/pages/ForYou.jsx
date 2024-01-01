import React, { useState } from 'react'
import Library from '../componets/for-you/Library';
import ForYouPage from '../componets/for-you/ForYouPage';
import logo from '../images/logo.png'
import Nav from '../componets/for-you/Nav';
import SearchBar from '../componets/for-you/SearchBar';


function ForYou() {
  
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


  /* Trying giving it a class name with that green selected style instead */



  return (
    <>
      <div className='Container'>

        <Nav showActiveForYou={showActiveForYou} showActiveLibrary={showActiveLibrary} ShowLibrary={ShowLibrary} ShowForYou={ShowForYou} logo={logo} />

        <section>
          <SearchBar/>
          
          <div className='content__container'>
            {showForYou && <ForYouPage />}
            {showLibrary && <Library/>}
          </div>
        </section>
      </div>
    </>
  )
}

export default ForYou