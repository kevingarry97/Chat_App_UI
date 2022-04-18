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
    if(res.status == 200) {
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
    <>
      <LoadingIndicator visible={loading} />
      <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
        <Container maxWidth="md" sx={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "4em"}}>
          <h1 className={classes.text_center}>Forgot Password ?</h1>
          <p className={`${classes.text_center} ${classes.text_muted}`}><small>No Worries, we will send you a rest instructioin on your Email</small></p>
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit} className={classes.pt_5}>
              <label htmlFor=""><b>Email:</b></label>
              <TextField type={'email'} onChange={handleChange} value={email} fullWidth label="name@mail.com" margin="normal" />
              <Button variant="contained" type='submit' color="primary" size="large" sx={{marginTop: '30px'}} fullWidth>
                Reset Password
              </Button>
            </form>
            <h6 className={classes.text_center}>
              <Link className={`${classes.decoration_0}`} to={'/auth'}>
                Back to login
              </Link>
            </h6>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default RequestReset;
