import React from 'react'
import { useParams } from 'react-router'

export default function Booking() {
    const{bid,date} = useParams();
    console.log(bid, date);


  return (
    <div className='text-white text-center'>
        <h3>Booking confirmed</h3>
        <h6> your booking id : {bid}</h6>
        <h6>booking Date: {date}</h6>
    </div>
    
    
  )
}
