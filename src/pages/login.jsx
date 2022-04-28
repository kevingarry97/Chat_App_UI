import React, { useState } from 'react';
import { Container, Grid, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../assets/customStyles';
import auth from '../services/auth';
import { toast } from 'react-toastify';

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
    <h1>Login</h1>
  )
}

export default Login;
