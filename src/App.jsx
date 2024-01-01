import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import ForYou from './pages/ForYou';

function App() {
  
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-you" element={<ForYou/>} />
          <Route path='/book/:id' element={<BookInfo/>}/>
        </Routes>
      </Router>
      
      
      
    </>
  );
}

export default App;
