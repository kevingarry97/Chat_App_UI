import React, { useState } from 'react';
import { Button, Container, TextField, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useStyles } from '../assets/customStyles';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { createUser } from '../services/user';
import { toast } from 'react-toastify';
import LoadingIndicator from '../components/loadingIndicator';
import auth from '../services/auth';
import AuthLayout from '../layout/authLayout';

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
    <AuthLayout>
      <div className="card border-0 mx-4">
        <div className="card-body mt-5">
          <small className='text-muted'><b>START FOR FREE</b></small>
          <h3 className='mt-2'>Create New Account<b>.</b></h3>
          <small className='text-muted'>Already a Member? <Link to="/">Sign In</Link></small>
          <form className='my-5'>
            <div className="row mb-4">
              <div className="form-group col-md-6">
                <input type="text" placeholder='First name' className="form-control border-0 border-bottom" />
              </div>
              <div className="form-group col-md-6">
                <input type="text" placeholder='Last name' className="form-control border-0 border-bottom" />
              </div>
            </div>
            <div className="form-group mb-5">
              <input type="email" placeholder='Email' className="form-control border-0 border-bottom" />
            </div>
            <div className="form-group mb-5">
              <input type="password" placeholder='Password' className="form-control border-0 border-bottom" />
            </div>
            <button className='btn btn-success btn-block rounded-pill py-2 mt-5'> <b>Let's Go</b></button>
          </form>
        </div>
      </div>
          
    </AuthLayout>
  )
}

export default Register
