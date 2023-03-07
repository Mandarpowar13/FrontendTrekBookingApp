import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { UserContext } from "../../App";

export default function CustNavBar(props) {
    
    const {state , dispatch} = useContext(UserContext);
    const [uid, setuid] = useState({
        uid :"",
    });
    
    const userid = window.localStorage.getItem('userid')
    const navigate = useNavigate();

    const [search, setsearch] = useState({
        name:""
    });
    useEffect(() => {
        document.body.style.backgroundColor = "black"
        
        console.log(userid);
        //console.log(uid.uid)
    },);
    
    const trekbyname =async () =>{
        console.log(search.name)
     navigate(`/searchTrekByname/${search.name}`)
    }
    const logout = () =>{
        navigate("/logout")
        
    }

    const RenderButton = () =>{
        if(userid){
            return(
                <>
                    
                    <Nav.Link href="/logout">logout</Nav.Link>
                    <Nav.Link href='/profile'>profile</Nav.Link>
                </>
            )
        }
        else{
            return(
                <>
                
                <Nav.Link href="/custLOGIN">Login</Nav.Link>
                                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                                   
                </>
            )
        }
    }
   
    return (
        <div>
            
                <Navbar  className="mb-1 navbar-dark bg-dark">
                    <Container fluid>
                        <Navbar.Brand text href="#">Trek Booking App</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavba`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavba`}
                            aria-labelledby={`offcanvasNavbarLabe`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabe`}>
                                    Trek Booking App
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                
                                    <Nav.Link href="/dashboard/:uid">Home</Nav.Link>
                                    
                                    <RenderButton/>





                                    
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdow`}
                                    >
                                        <NavDropdown.Item href="/aboutUs">AboutUs</NavDropdown.Item>
                                        <NavDropdown.Item href="/contactUs">
                                            contac tUs
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                               
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        
        </div>
    )
}
