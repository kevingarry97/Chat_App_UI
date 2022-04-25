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
    <>
      <LoadingIndicator visible={loading} />
      <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.justify_center}`}>
        <Container maxWidth="md">
          <UserBar />
          <h2 style={{margin: 3, padding: 0}}>Personal Info</h2>
          <p className={classes.text_muted}>You can Update your profile info as well</p>
          <div style={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "1.5em", marginTop: '2.5em'}}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <label htmlFor="">Username:</label>
                  <TextField name='username' value={data?.username} onChange={handleChange} fullWidth size="small" margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="">Email:</label>
                  <TextField name='email' value={data?.email} onChange={handleChange} fullWidth size="small" margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <img src={data?.profileUrl} height={150} width={150} style={{ objectFit: 'fill', borderRadius: '50%'}} alt="" />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="">Role:</label>
                  <TextField name='role' disabled value={data?.role} onChange={handleChange} fullWidth size="small" margin="normal" />
                </Grid>
              </Grid>
              <Button variant="contained" type='submit' color="primary" size="large" sx={{marginTop: '3em'}}>
                Update Profile
              </Button>
              </form>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Profile;
