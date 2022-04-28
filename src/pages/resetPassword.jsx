import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from '../assets/customStyles';
import { Link } from 'react-router-dom';
import { resetPassword } from '../services/auth';
import LoadingIndicator from '../components/loadingIndicator';
import { toast } from 'react-toastify';

const ResetPassword = ({match}) => {
  const [data, setData] = useState({password: '', confirm: ''});
  const [loading, setLoading] = useState(false);
  const {token, user: userId} = match.params;
  const classes = useStyles();

  const handleChange = ({target}) => {
    setData({...data, [target.name]:target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.password !== data.confirm) return toast("Try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    setLoading(true);
    const payload = {
      token,
      userId,
      password: data.password
    };

    const res = await resetPassword(payload);

    if(res.status === 200) {
      setLoading(false);
      toast("Successfully Resetted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setData({password: '', confirm: ''});
      window.location = '/auth';
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
    <h1>Reset Password</h1>
  )
}

export default ResetPassword;
