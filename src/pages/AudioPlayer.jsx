import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function AudioPlayer() {
    const { id } = useParams()
    const [ bookSummary, setBookSummary ] = useState({})

    async function fetchBookSummary (){
        const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
        setBookSummary(data)
    }

    
    useEffect(() => {
        fetchBookSummary()
        console.log(bookSummary)
    }, [])

  return (
    <>
        <div className='Book__Summary__Page'>
            <h1 className='Book__Info-title'>{bookSummary.title}</h1>
            <h3>{bookSummary.summary}</h3>    
            
        </div>
        
    </>
  )
}

export default AudioPlayer