import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import ForYou from './pages/ForYou';
import Library from './pages/Library';
import Nav from './componets/Nav';
import SearchBar from './componets/SearchBar';
import Settings from './pages/Settings';
import Modual from './componets/Modules/Modual';
import AudioPlayer from './pages/AudioPlayer';

import logo from './images/logo.png'

import React, { useState, useEffect, createContext } from 'react'

import {Helmet} from "react-helmet";


export const Context = createContext();


function App() {

  const[loginState, setLoginState] = useState(false)
  const[accountInformation, setAccountInformation] = useState(" ")
  const[showModal, setShowModal] = useState(false)

  function showModule(){
    if(!showModal){
      setShowModal(true)
    }else if(showModal){
      setShowModal(false)
    }
  }


              
  return (
    <>
      <Context.Provider value={{setShowModal, showModule, setAccountInformation, accountInformation, loginState, setLoginState}}>

        { showModal && <Modual /> } 

        <Helmet>
            <title>Summarist</title>
            <meta name="description" content="Helmet application" />
        </Helmet>

        <Routes>
          <Route index element={ <Home showModule={showModule} /> }/> 
        </Routes>

      
        <div className='Container'>
          <Nav logo={logo} />
          <section>
            <SearchBar/>
            <div className='content__container'>
              <Routes>
                <Route path="/for-you" element={<ForYou />} />
                <Route path="/library" element={<Library/>} />
                <Route path='/book/:id' element={<BookInfo/>}/>
                <Route path='/settings' element={<Settings />} />
                <Route path='/player/:id' element={<AudioPlayer/>} />
              </Routes>
            </div>
          </section>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
