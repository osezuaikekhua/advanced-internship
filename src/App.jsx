import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import ForYouPage from './pages/ForYou';
import Library from './pages/Library';
import Nav from './componets/Nav';
import SearchBar from './componets/SearchBar';

import logo from './images/logo.png'


function App() {
  
  return (
    <>

      <Routes>
        <Route index element={<Home/>}/>
      </Routes>

      <div className='Container'>
        <Nav logo={logo} />
        <section>
          <SearchBar/>
          <div className='content__container'>
            <Routes>
              <Route path="/for-you" element={<ForYouPage/>} />
              <Route path="/library" element={<Library/>} />
              <Route path='/book/:id' element={<BookInfo/>}/>
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
