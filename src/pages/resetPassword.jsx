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
    <>
      <LoadingIndicator visible={loading} />
      <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
        <Container maxWidth="md" sx={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "4em"}}>
          <h1 className={classes.text_center}>Reset Password ?</h1>
          <p className={`${classes.text_center} ${classes.text_muted}`}><small>No Worries, we will send you a rest instructioin on your Email</small></p>
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit} className={classes.pt_5}>
              <label htmlFor=""><b>Password:</b></label>
              <TextField type={"password"} name='password' value={data.password} onChange={handleChange} fullWidth label="6+ character, 1 Capital letter" id="fullWidth" margin="normal" />
              <label htmlFor=""><b>Confirm Password:</b></label>
              <TextField type={"password"} name='confirm' value={data.confirm} onChange={handleChange} fullWidth label="6+ character, 1 Capital letter" id="fullWidth" margin="normal" />
              
              <Button variant="contained" type='submit' color="primary" size="large" sx={{marginTop: '30px'}} fullWidth>
                Reset Now
              </Button>
            </form>
            <h6 className={classes.text_center}>
              <Link className={`${classes.decoration_0}`} to={'/request'}>
                Re-type Email
              </Link>
            </h6>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ResetPassword;
