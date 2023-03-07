import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function TrekDEtailcomponent(props) {
 const navigateBooking = useNavigate();
 const [bid, setbid] = useState({
  bookingId:""
 });
 const [bdate, setbdate] = useState({
  bookingdate : ""
 });
    const navigate =() => {
      
       
      console.log("Cid",props.cid,"trek id:",props.tid)
      if(props.cid === "undefined"){
        navigateBooking("/custLOGIN")
      }
    
        axios.post(` http://localhost:8080/bookings/addBooking/${props.cid}/${props.tid}` , 
        {
            "tid":props.tid,
            "cid":props.cid
        }).then((res)=>{
          console.log("go response from booing api",res)
          navigateBooking(`/BookingPage/${res.data.bid}/${res.data.date}`)
          
          console.log(res.data.date);
          bid.bookingId= res.data.bid;
          bdate.bookingdate = res.date.date;
          
          console.log(bid.bookingId,bdate.bookingdate);

        })
          
        
          //console.log(uid);
          //console.log(tid);
          
  
  
      }

      const overlay={
        position: "absolute",
        bottom: "100px",
        right: "340px",
        
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
    }
  return (
    <>
     <Carousel variant="dark" className='text-white' >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.details.imgUrl}
          alt="First slide"
          style={{width:"68.8rem",height:"28rem"}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.details.imgUrl1}
          alt="Second slide"
          style={{width:"68.8rem",height:"28rem"}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="#"
          alt="Third slide"
          style={{width:"68.8rem",height:"28rem"}}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="text-block text-center" style={overlay}>
                    <h4>{props.details.name}</h4>
                    <p>{props.details.location}</p>
                </div>
    

   < Card style={{ width: '68.8rem', backgroundColor:'#023020' }}  className="text-white" >
      
      <Card.Body >
        <Card.Title><h3>{props.details.name}</h3> </Card.Title>
        <h4> price: {props.details.price}</h4>
        <p>Happening on : {props.details.date}</p>
        <p>Trip Duration (Including Travel): {props.details.timing}</p>
        <p>Distance : {props.details.distance}</p>

       
        <br></br>
        <br></br>
        <div>
        <p>
        {props.details.par1}
        
        </p>
        <p>
        {props.details.par2}
        
        </p>
        <p>
        {props.details.par3}
        
        </p>
        <p>
        {props.details.par4}
        
        </p>
        <p>
        {props.details.par5}
        
        </p>
        </div>
        <Button variant="light" onClick={() => navigate()}>Book Trek</Button>
      </Card.Body>
    </Card>
    </>
  )
}
