import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";


function BookInfo() {
    const { id } = useParams()
    const [book, setBook] = useState({})

    async function fetchBook(){
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
        setBook(data)
        console.log(book)
    }

    useEffect(() => {
        fetchBook()
    }, [])

  return (
    <>
    <div className="Book__Info__Page">
     <div className="Book__Info">
            <h1 className='Book__Info-title'>{book.title}</h1>
            <h4 className='Book__Info-author'>{book.author}</h4>
            <h2 className='Book__Info-subTitle'>{book.subTitle}</h2>
            <div className='Book__Info-group'>
                <div className='Book__Info-group_child'>
                    <div> <CiStar /> <h5>{`${book.averageRating} (${book.totalRating} ratings)`}</h5></div>
                    <div> <IoMicOutline /> <h5>{book.type}</h5> </div>
                </div>
                <div className='Book__Info-group_child'>
                    <div> <BsClock /> <h5> 05:38</h5></div>
                    <div> <HiOutlineLightBulb /> <h5>{`${book.keyIdeas} Key ideas`}</h5> </div>
                </div>
            </div>
            <div className='Book__Info-read'>
                <button>Read</button>
                <button>Listen</button>
            </div>
            <div className="Book__Info-library">
                <CiBookmark style={{fontSize: 27}}/>
                <h2>Add title to My Library</h2>
            </div>
            <header>What's it about?</header>
            <div className="Book__Info-tags">
                <button>Biography</button>
                <button>Personal Developement</button>
            </div>
            <h3>{book.bookDescription}</h3>

            <header>About the author</header>
            <h3>{book.authorDescription}</h3>

        </div>
        <div className="Book__Image"><img src={book.imageLink} alt="" /></div>        
    </div>
    </>

  )
}

export default BookInfo