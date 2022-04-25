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
    <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
      <Container maxWidth="lg" sx={{ backgroundColor: '#FFF'}}>
        <Grid container justifyContent={'center'}>
          {/* <Grid item xs={7}>
            <Container>
              <div className={`${classes.flex} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
                <img src={AuthImage} className={classes.img_fluid} alt="" />
              </div>
            </Container>
          </Grid> */}
          <Grid item xs={5}>
            <Container>
              <div className={`${classes.flex} ${classes.h_100} ${classes.flex_column} ${classes.justify_between}`}>
                <div className={`${classes.flex} ${classes.align_end}`} />
                <div className={classes.w_100}>
                  <small className={classes.text_muted}><b>START FOR FREE</b></small>
                  <h1 style={{margin: 0, padding: 0}}>Sign in with us.</h1>
                  <small className={classes.text_muted}>Don't have an account? </small>
                  <small className={classes.text_muted}><Link to={"/register"}><b>Sign Up</b></Link></small>
                  <form onSubmit={handleSubmit} className={classes.pt_5}>
                    <label htmlFor=""><b>Email:</b></label>
                    <TextField name='email' value={data.email} onChange={handleChange} fullWidth label="name@mail.com" margin="normal" />
                    <label htmlFor=""><b>Password:</b></label>
                    <TextField type={"password"} name='password' value={data.password} onChange={handleChange} fullWidth label="6+ character, 1 Capital letter" margin="normal" />
                    {/* <div className={classes.py_2} /> */}
                    <Link className={`${classes.decoration_0} ${classes.float_right}`} to={'/request'}><small className={classes.text_muted}>Forgot password?</small></Link>
                    <div className={classes.py_2} />
                    <Button type='submit' variant="contained" color="primary" size="large" fullWidth>
                      Log in to account
                    </Button>
                  </form>
                </div>
                <div />
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Login;
