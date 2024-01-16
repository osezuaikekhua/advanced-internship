import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import ForYou from './pages/ForYou';
import Library from './pages/Library';
import Nav from './componets/Nav';
import SearchBar from './componets/SearchBar';
import Settings from './pages/Settings';

import logo from './images/logo.png'

import { useState } from 'react';

import {Helmet} from "react-helmet";


function App() {

  const[loginState, setLoginState] = useState(null)
  const[accountInformation, setAccountInformation] = useState(" ")
  const[ isFYvisible, setIsFYvisible ] = useState(false)
  
  return (
    <>
    <Helmet>
        <title>Summarist</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Routes>
        <Route index element={<Home setLoginState = {setLoginState} setAccountInformation = {setAccountInformation} setIsFYvisible={setIsFYvisible} />}/>
      </Routes>
    { isFYvisible ?
      <div className='Container'>
        <Nav logo={logo} />
        <section>
          <SearchBar/>
          <div className='content__container'>
            <Routes>
              <Route path="/for-you" element={<ForYou loginState = {loginState} />} />
              <Route path="/library" element={<Library/>} />
              <Route path='/book/:id' element={<BookInfo/>}/>
              <Route path='/settings' element={<Settings accountInformation = {accountInformation} loginState = {loginState} />} />
            </Routes>
          </div>
        </section>
      </div>
      :
      " "
    }  
    </>
  );
}

export default App;
