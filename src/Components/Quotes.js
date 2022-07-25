import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Quote from './Quote';
const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
 useEffect(() => {
   axios.request("https://animechan.vercel.app/api/quotes").then(function(responce){
       console.log(responce.data)
       setQuotes(responce.data)
   }).catch(function(error){
       console.log(error)
   })
 }, []);

  return (
    <div>
        <h1>Quotes</h1>
        <div className='row'>
        {quotes.map(quote => <Quote key={quote.id} quote={quote} />)}
        </div>

    </div>
  )
}

export default Quotes