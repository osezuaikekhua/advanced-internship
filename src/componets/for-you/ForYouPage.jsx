import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoMdPlayCircle } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom'
import Book from './Book';


function ForYouPage() {
    const[selectedBooks, setSelectedBooks] = useState([])
    const[recommendedBooks, setrecommendedBooks] = useState([])
    const[suggestedBooks, setSuggestedBooks] = useState([])

    async function getBooks(constVal, api){
      const { data } = await axios.get(api)
      constVal(data)
      
    }

    useEffect(() => {
      getBooks(setSelectedBooks, 'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
      getBooks(setrecommendedBooks, "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
      getBooks(setSuggestedBooks, "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
    },[])
    console.log(suggestedBooks)
  return (
    <> 
      <div className='ForYou__Container'>

        <section>
            <h2>Selected just for you</h2>
            
            {
              selectedBooks.map(book => (
                <div className='Selected__Book__Section' key={book.id} >
                  <p>{book.subTitle}</p>
                  <div className='line'></div>
                  <div className='Selected__Book__area'>
                      <img className='Selected__Book' src={book.imageLink} alt="" />
                      <div className="Selected__Book__Info">
                          <h1>{book.title}</h1>
                          <h2>{book.author}</h2>
                          <div><IoMdPlayCircle /> <h3>3mins 23secs</h3> </div>
                      </div>
                  </div>
                </div>
              ))}
        </section>

        <section className="Recommended__Books__Section">
            <h2>Recommended For You</h2>
            <p>We think you'll like these</p>

            <div className="Recommended__Books">
                {
                  recommendedBooks.slice(0,4).map(book => (
                    <Link to={`/book/${book.id}`} >
                    <Book key={book.id}
                          imageLink={book.imageLink} 
                          title={book.title} 
                          author={book.author} 
                          subTitle={book.subTitle} 
                          averageRating = {book.averageRating}
                    />
                    </Link>
                ))}
                
                

            </div>
        </section>

        <section className="Recommended__Books__Section">
            <h2>Suggested Books</h2>
            <p>We think you'll like these</p>

            <div className="Recommended__Books">
                {
                  suggestedBooks.slice(0,4).map(book => (
                    <Link to={`/book/${book.id}`}  >
                    <Book key={book.id}
                          imageLink={book.imageLink} 
                          title={book.title} 
                          author={book.author} 
                          subTitle={book.subTitle} 
                          averageRating = {book.averageRating}
                    />
                    </Link>
                ))}
              </div>
        </section>


      </div>
    
    </>
  )
}

export default ForYouPage