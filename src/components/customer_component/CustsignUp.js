import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function CustsignUp() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
    
      email: "",
      password: "",
      
    });
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8080/cus/signup", {
          name: values.name,
          email: values.email,
          
          password: values.password,
        })
        .then((res) => {
          
          console.log("signed up");
          console.log(res.data);
          navigate("/custLOGIN");
        })
        .catch((err) => console.error(err));
    };
  
    const handlePasswordVisibility = () => {
      setValues({ ...values, showPassw: !values.showPass });
    };
  
    return (
      <div>
        <div>
        <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <Form onSubmit={handleSubmit}>
      <div  className="mb-3" container direction="column" spacing={2}>
        <div item>
          <input
            fullWidth
            className="form-control"
            label="Enter your name"
            placeholder="Name"
            variant="outlined"
            required
            onChange={(e) =>
              setValues({ ...values, name: e.target.value })
            }
          />
        </div>
  
       
  
  
        <div item>
          <input
          className="form-control"
            type="email"
            fullWidth
            label="Enter your email"
            placeholder="Email Address"
            variant="outlined"
            required
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
          />
        </div>
        <div item>
          <input
          className="form-control"
            type={values.showPassword ? "text" : "password"}
            fullWidth
            label="Password"
            placeholder="Password"
            variant="outlined"
            required
            onChange={(e) =>
              setValues({ ...values, password: e.target.value })
            }
          
          />
        </div>
        <div item>
          <Button type="submit" variant='dark' className="btn btn-outline-dark text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </Form>
    </div>
            
    </div>
    </div>
  </div>
  
   </div>
  )
}
