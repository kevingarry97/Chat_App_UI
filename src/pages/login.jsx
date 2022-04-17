import React, { useState } from 'react';
import { Container, Grid, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthImage from '../assets/auth_image.svg';
import { useStyles } from '../assets/customStyles';
import auth from '../services/auth';

const Login = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({email: '', password: ''});
  
  const handleChange = ({target}) => {
    setData({...data, [target.name]: target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.login(data.email, data.password)
    const { state } = props.location;

    console.log('State ', state)

    window.location = state ? state.from.pathname : "/message";
    setData({email: '', password: ''})
  }

  return (
    <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
      <Container maxWidth="lg" sx={{ backgroundColor: '#FFF'}}>
        <Grid container>
          <Grid item xs={7}>
            <Container>
              <div className={`${classes.flex} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
                <img src={AuthImage} className={classes.img_fluid} alt="" />
              </div>
            </Container>
          </Grid>
          <Grid item xs={5}>
            <Container>
              <div className={`${classes.flex} ${classes.h_100} ${classes.flex_column} ${classes.justify_between}`}>
                <div className={`${classes.flex} ${classes.align_end}`} />
                <div className={classes.w_100}>
                  <small className={classes.text_muted}><b>START FOR FREE</b></small>
                  <h1 style={{margin: 0, padding: 0}}>Sign in with us.</h1>
                  {/* <small className={classes.text_muted}>Don't have an account? </small> */}
                  {/* <small className={classes.text_muted}><Link to={"/register"}><b>Sign Up</b></Link></small> */}
                  <form onSubmit={handleSubmit} className={classes.pt_5}>
                    <label htmlFor=""><b>Email:</b></label>
                    <TextField name='email' value={data.email} onChange={handleChange} fullWidth label="name@mail.com" id="fullWidth" margin="normal" />
                    <label htmlFor=""><b>Password:</b></label>
                    <TextField type={"password"} name='password' value={data.password} onChange={handleChange} fullWidth label="6+ character, 1 Capital letter" id="fullWidth" margin="normal" />
                    {/* <div className={classes.py_2} /> */}
                    <Link className={`${classes.decoration_0} ${classes.float_right}`} to={'/'}><small className={classes.text_muted}>Forgot password?</small></Link>
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
