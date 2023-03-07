


import React, { useContext, useState } from "react";
import axios from "axios";
import {  Link, useNavigate } from "react-router-dom";
import { Button,Form } from "react-bootstrap";
import "./login.css"
import CustNavBar from "../navbar/CustNavBar";
import { UserContext } from "../../App";
import video from "./video.mp4"

export default function CustLogin() {
	const navigate = useNavigate();
	const {state , dispatch} = useContext(UserContext);

	
	
	
	const [values, setValues] = useState({
		email: "",
		pass: "",
		showPass: false,
	});

	


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values.pass);
		console.log(values.email);
		axios
			.post(" http://localhost:8080/cus/login", {
				email: values.email,
				password: values.pass
			})
			.then((res) => {
				dispatch({type:"USER",payload:true})
				console.log(res.data);
				if(res.data ==="SUCCESS"){
					axios.get(`http://localhost:8080/cus/customerByemail/${values.email}`).then((res)=>{
						
					navigate(`/dashboard/${res.data.cid}`);

					window.localStorage.setItem('userid',JSON.stringify(res.data.cid))

						
					})
					
					
						
					
					
				}
				else{
					console.log("login failed")
					navigate("/")
					
				}
				
			})
			.catch((err) => console.error(err));

	};
	const handlePassVisibilty = () => {
		setValues({
			...values,
			showPass: !values.showPass,
		});
	};
	const style={
		
			position: "absolute", 
			 
			left: "1432px", 
			width: "1440px" ,
			height: "900px", 
			
		  
	}
	const style1 = {
		top: "-626px"
	}
	const overlay={
        position: "absolute",
        bottom: "100px",
        right: "360px",

        //backgroundColor: "black",
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
    }
	

	return (
		<>
		
		<div  >
			<video autoPlay muted loop
			style={
				{	
					position:"fixed",
					right:"0",
					bottom:'0',
					minWidth:'100%',
					minHeight:'100%',
					/*height:'550px',
					width : '1100px'*/
				}
			}

			>
				<source src={video}></source>
			</video>


			<Form onSubmit={handleSubmit} className="text-white" style={overlay}>
				<h1>Welcome to Trek App</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => setValues({ ...values, email: e.target.value })} />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={(e) => setValues({ ...values, pass: e.target.value })} />
				</Form.Group>
				
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
				<Link to={"/custSignup"}>Register/signup</Link>

			</Form>
		</div>
		</>
	);
}
