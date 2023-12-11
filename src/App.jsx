import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Modual from './componets/Modules/Modual';
import ForYou from './pages/ForYou';

function App() {
  
  const [showModal, setShowModal] = useState(false)
    function showModule(){
      if(!showModal){
        setShowModal(true)
      }else if(showModal){
        setShowModal(false)
      }
    }

  return (
    <>
      { showModal && <Modual showModule={showModule} /> }

      <Router>
        <Routes>
          <Route path="/" element={<Home showModule={showModule} />} />
          <Route path="/for-you" element={<ForYou/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
