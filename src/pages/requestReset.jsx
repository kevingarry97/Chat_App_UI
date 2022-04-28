import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from '../assets/customStyles';
import { Link } from 'react-router-dom';
import { requestReset } from '../services/auth';
import LoadingIndicator from '../components/loadingIndicator';
import { toast } from 'react-toastify';

const RequestReset = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleChange = ({target}) => {
    setEmail(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await requestReset(email);
    if(res.status === 200) {
      setLoading(false);
      toast("Verify your email to check the request", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      setEmail('');
    } else {
      toast("Invalid Email", {
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
    <h1>Requests Password</h1>
  )
}

export default RequestReset;
