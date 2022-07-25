import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className='quote'>
      
       <h1>{quote.text}</h1>
       <div>
           <h3>{quote.character}</h3>
           <p>{quote.quote}</p>
       </div>
    </div>
  )
}

export default Quote