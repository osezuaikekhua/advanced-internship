import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoMdPlayCircle } from "react-icons/io";


function ForYouPage() {
    const[selectedBooks, setSelectedBooks] = useState([])

    async function getBooks(api){
      const { data } = await axios.get(api)
      setSelectedBooks(data)
      console.log(selectedBooks)
    }

    useEffect(() => {
      getBooks('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
    },[])

  return (
    <> 
      <div className='ForYou__Container'>

        <section>
            <h2>Selected just for you</h2>
            
            {
              selectedBooks.map(book => (
                <div className='Selected__Book__Section'>
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

      </div>
    
    </>
  )
}

export default ForYouPage