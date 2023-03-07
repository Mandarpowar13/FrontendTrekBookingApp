import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import CustNavBar from '../navbar/CustNavBar';
import vally from './vally.jpg'

export default function Dashboard() {
    const navigate = useNavigate();
    const [trekList, settrekList] = useState([]);



    const { uid } = useParams();
    

    useEffect(() => {
        const userid = window.localStorage.getItem('userid')
        console.log(userid);
        loadtrek();
        
    }, []);

    const loadtrek = async () => {
        const result = await axios.get("http://localhost:8080/api/showtreks");
        settrekList(result.data);
        console.log(result.data);
        console.log(uid);
    };
        
    const overlay={
        position: "absolute",
        bottom: "100px",
        right: "60px",
        backgroundColor: "black",
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
    }
    const cont ={
        
            position: "relative"
        
    }
    return (
        <>
        

        <div style={{width:"1050px",height:"30rem"}}>

           
            
             <img src={vally} alt="Norway" style={{width:"68.8rem",height:"25rem"}} />
                <div class="text-block" style={overlay}>
                    <h4>explore treks</h4>
                    <p>IF YOU LIKE BOOK ONE</p>
                </div>
          

            <section id="gallery" className='mt-5'>
                <Row lg={3}>
                    {
                        trekList.map(
                            trek =>
                                <Col className='d-flex'>
                                    <div  className='flex-fill bg-secondery container text-white'>
                                        <div class="row">
                                            <a href={`/trekdetsils/${trek.id}/${uid}`}>
                                            <div class=" mb-5 btn btn-sm  " >
                                                <div class="card  bg-dark text-white" style={{width:"22rem",height:"27.5rem"}} >
                                                    <img src={trek.imgUrl} alt="" class="card-img-top " style={{width:"22rem",height:"20rem"}} />
                                                    <div class="card-body" style={{height:"8rem",}}>
                                                        <h5 class="card-title">{trek.name}</h5>
                                                        <p class="card-text">{trek.price}</p>
                                                        
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            </a>


                                        </div>
                                    </div>
                                </Col>

                        )
                    }
                </Row>

            </section>

        </div>

        </>
    )
}
