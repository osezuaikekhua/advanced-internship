import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";

function Book({key, imageLink, title, author, subTitle, averageRating}) {
  return (
    <div className="Book" key={key}>
        <img className='Book__image' src={imageLink} alt=""/>
        <div className="Book__Title">{title}</div>
        <div className="Book__authorName">{author}</div>
        <div className="Book__Description">{subTitle}</div>
        <footer>
            <div className="Book__Length"> <CiClock2 /> 03:24</div>
            <div className="Book__Rating"> <IoIosStarOutline /> {averageRating}</div>
        </footer>
    </div>    
  )
}

export default Book