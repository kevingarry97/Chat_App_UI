import React, { useEffect, useState } from 'react'
import { useStyles } from '../assets/customStyles';
import {Button, Container, Grid, TextField} from '@mui/material';
import { getUser, updateUser } from '../services/auth';
import LoadingIndicator from '../components/loadingIndicator';
import { toast } from 'react-toastify';
import UserBar from '../components/userBar';

const Profile = () => {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = ({target}) => {
    setData({...data, [target.name]: target.value});
  }

  const populateUser = async () => {
    const {data} = await getUser();
    setData(data);
  }

  useEffect(() => {
    populateUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateUser(data);
    if(res.status === 200) {
      populateUser();
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
    <h1>Profile</h1>
  )
}

export default Profile;
