import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import vally from './vally.jpg'

export default function Profile() {
    
    const [customer, setcustomer] = useState([]);
    const customerId =window.localStorage.getItem('userid');
    useEffect(() => {
       console.log("from profile page customer id : " ,customerId)
       axios.get(`http://localhost:8080/cus/${customerId}`).then((res) =>{
       console.log(res.data) 
       setcustomer(res.data)
       console.log(customer.name)
       })
      }, []);
  
     
              const overlay={
                position: "absolute",
                bottom: "200px",
                right: "320px",
                background: "rgba(0,0,0,0.6)",
                color: "white",
                paddingLeft: "50px",
                paddingRight: "50px",
            }

  return (
    <>

<img src={vally} alt="Norway" style={{width:"68.8rem",height:"20rem"}} />
                <div class="text-block text-center" style={overlay}>
                    <h4>Welcome {customer.name} to your profile</h4>
                    <p>see your details below</p>
                </div>
    <Card className='mt-3 bg-dark text-white text-center' style={{ width: '68.8rem',height:"10rem" }}>
      <Card.Body className='mt-2'>
        <Card.Title>Name : {customer.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">your email: {customer.email}</Card.Subtitle>
        
        <Card.Link href="/bookinglist">see your bookings</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}
