import React, { useState } from 'react';
import { Container, Grid, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ImgMobile from '../assets/chat_mobile.svg';
import Logo from '../assets/Logo.svg';
import { useStyles } from '../assets/customStyles';
import auth from '../services/auth';
import { toast } from 'react-toastify';
import AuthLayout from '../layout/authLayout';

const Login = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({email: '', password: ''});
  
  const handleChange = ({target}) => {
    setData({...data, [target.name]: target.value})
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await auth.login(data.email, data.password)
      const { state } = props.location;
  
      console.log('State ', state)
  
      window.location = state ? state.from.pathname : "/blog";
      setData({email: '', password: ''})

    } catch(e) {
      toast("Invalid Email or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    
  }

  return (
    <AuthLayout>
      <div className="container bg-light py-5 px-4">
        <div className="row d-flex align-items-strech">
          <div className="col-md-6 px-5">
            <img src={Logo} alt="" />
            <h4 className='my-5 text-muted'>#1 Intelligent Messaging <br /> App for office, Mobile and <br /> Remote Teams.</h4>
            <img src={ImgMobile} className="img-fluid my-4" alt="" />
          </div>
          <div className="col-md-6 mx-3 bg-white px-0 rounded">
            <div className="card border-0 mx-4">
              <div className="card-body mt-5">
                <small className='text-muted'><b>YOU CAN CHOOSE FREE</b></small>
                <h3 className='mt-2'>Welcome Back<b>.</b></h3>
                <small className='text-muted'>Don’t have an account? <a href='#'>Sign Up</a></small>
                <form className='my-5'>
                  <div className="form-group my-4">
                    <input type="text" placeholder='Email' className="form-control border-0 border-bottom" />
                  </div>
                  <div className="form-group my-4">
                    <input type="password" placeholder='Password' className="form-control border-0 border-bottom" />
                    <small id="passwordHelpBlock" class="form-text text-muted float-right mb-5">
                      Forgot Password
                    </small>
                  </div>
                  <button className='btn btn-success btn-block rounded-pill py-2 mt-5'> <b>Sign In </b></button>
                </form>
              </div>
            </div>
            <div className="bottom-content py-2">
              <small className='text-muted'>By clicking the button above, you agree to our <a href='#'>terms of use</a> and <a href='#'>privacy ploicies</a></small>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login;
