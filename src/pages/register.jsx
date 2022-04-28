import React, { useState } from 'react';
import { Button, Container, TextField, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useStyles } from '../assets/customStyles';
import { Link } from 'react-router-dom';
import { PhotoCamera } from '@mui/icons-material';
import styled from '@emotion/styled';
import { createUser } from '../services/user';
import { toast } from 'react-toastify';
import LoadingIndicator from '../components/loadingIndicator';
import auth from '../services/auth';

const Register = () => {
  const classes = useStyles();
  const [data, setData] = useState({username: '', email: '', password: '', role: ''});
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState('');
  const [view, setView] = useState('')

  const handleChange = ({target}) => {
    const reader = new FileReader();
    // eslint-disable-next-line no-cond-assign
    // console.log(target);
    if(target.name === "file") {
      setUpload(target.files[0])
      reader.onload = () => {
        if(reader.readyState === 2) {
          setView(reader.result)
        }
      }
      reader.readAsDataURL(target.files[0]);
    }
    setData({...data, [target.name]: target.value})
  }

  const Input = styled('input')({
    display: 'none',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await createUser({...data, role: data.role === '' && 'user'}, upload);

    if(res.status === 200) {
      setLoading(false);
      toast("Verify your email to activate account", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setData({username: '', email: '', password: '', role: ''});
      setUpload('');
      setView('');
    } else {
      toast("Try again later", {
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
    <h1>Register</h1>
  )
}

export default Register
