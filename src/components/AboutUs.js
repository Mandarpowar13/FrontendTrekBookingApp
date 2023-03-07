import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import mandar from './images/mandar.jpg'
import gourav from './images/gourav.jpg'
import im from './images/im.jpg'

class AboutUs  extends Component {
   
  
 
  state = {  } 
  render() { 
    document.body.style.backgroundColor = "black";
    const imgStyle= { width:'160px', height:'150px',borderRadius:'100px'}
    const style = {
    color: "#rgb(103, 66, 39)"
    }
    return (
      
     <>
    
               
                       
                        <div class="container align-items-center justify-content-center  " >
                    <div class="row ">
                        <div class=" col-lg-6">
                            <div class="card bg-dark text-white " style={{height:"16rem",width:'25rem'}}>
                                <img style={imgStyle} src={mandar} alt="" class=" mt-1 ml-3 p-2" />
                                <div class="card-body">
                                    <h5 class="card-title">Name</h5>
                                    <h6 class="card-text">email</h6>
                                    <h6 class="card-text">Part in project</h6>
                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class=" col-lg-6 mb-5">
                            <div class="card bg-dark text-white"  style={{height:"16rem",width:'25rem'}}>
                                <img style={imgStyle} src={gourav} alt="" class="card-img-top mt-1 ml-3 p-2" />
                                <div class="card-body">
                                    <h5 class="card-title">Name</h5>
                                    <h6 class="card-text">email</h6>
                                    <h6 class="card-text">Part in project</h6>
                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                       
                       
                       
                        


                    </div>
                </div>
                <div class="container align-items-center justify-content-center mb-5 " >
                    <div class="row">
                        <div class=" col-lg-6">
                            <div class="card bg-dark text-white "  style={{height:"16rem",width:'25rem'}}>
                                <img style={imgStyle} src={im} alt="" class="card-img-top mt-1 ml-3 p-2" />
                                <div class="card-body">
                                    <h5 class="card-title">Name</h5>
                                    <h6 class="card-text">email</h6>
                                    <h6 class="card-text">Part in project</h6>
                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class=" col-lg-6 mb 5">
                            <div class="card bg-dark text-white"  style={{height:"16rem",width:'25rem'}}>
                                <img style={imgStyle} src={im} alt="" class="card-img-top mt-1 ml-3 p-2" />
                                <div class="card-body">
                                    <h5 class="card-title">Name</h5>
                                    <h6 class="card-text">email</h6>
                                    <h6 class="card-text">Part in project</h6>
                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                       
                       
                       
                        


                    </div>
                </div>
                <div class="container align-items-center justify-content-center " >
                <div class="row align-items-center justify-content-center">
                        <div class=" col-lg-6 align-items-center justify-content-center">
                            <div class="card bg-dark text-white"  style={{height:"16rem",width:'25rem'}}>
                                <img style={imgStyle} src={im} alt="" class="card-img-top mt-1 ml-3 p-2 " />
                                <div class="card-body">
                                    <h5 class="card-title">Name</h5>
                                    <h6 class="card-text">email</h6>
                                    <h6 class="card-text">Part in project</h6>
                                    
                                </div>
                            </div>
                        </div>
                        </div>



                </div>
            


                
     
     
     </>


    );
  }
}
 
export default  AboutUs;