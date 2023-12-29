import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



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
    <div>
        <h1>{book.title}</h1>
        <h1>{book.author}</h1>
        <h1>{book.subTitle}</h1>
        <h1>{book.averageRating}</h1>
        <h1>{book.totalRating}</h1>
        <h1>{book.type}</h1>
        <h1>{book.keyIdeas}</h1>
        <h1>{book.tags}</h1>
        <h1>{book.bookDescription}</h1>
        
    </div>

  )
}

export default BookInfo