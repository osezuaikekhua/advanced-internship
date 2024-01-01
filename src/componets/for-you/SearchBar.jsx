import React from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";

function SearchBar() {
  return (
    <div className='search__container'>
    <div></div>
    <div className='search__bar'>
      <input type="text" placeholder='Search for books'/>
      <button ><RxMagnifyingGlass /></button>            
    </div>
  </div>
  )
}

export default SearchBar