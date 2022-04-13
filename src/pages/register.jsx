import React from 'react';
import { Button, Container, TextField, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useStyles } from '../assets/customStyles';
import { Link } from 'react-router-dom';
import { PhotoCamera } from '@mui/icons-material';
import styled from '@emotion/styled';

const Register = () => {
  const classes = useStyles();
  const Input = styled('input')({
    display: 'none',
  });
  return (
    <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
      <Container maxWidth="sm" sx={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "4em"}}>
        <h1 style={{margin: 3, padding: 0}} className={classes.text_normal}>Sign Up with your Information</h1>
        <small className={classes.text_muted}>Already have an account? </small>
        <small className={classes.text_muted}><Link to={"/register"}><b>Sign Up</b></Link></small>
        <form className={classes.pt_5}>
          <label htmlFor=""><b>Username:</b></label>
          <TextField fullWidth label="kevin@mail.com" id="fullWidth" margin="normal" />
          <label htmlFor=""><b>Email:</b></label>
          <TextField fullWidth label="name@mail.com" id="fullWidth" margin="normal" />
          <label htmlFor=""><b>User Role:</b></label>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Choose Role:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                {['moderator', 'user'].map(item => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
          </FormControl>
          <label htmlFor=""><b>Password:</b></label>
          <TextField fullWidth label="6+ character, 1 Capital letter" id="fullWidth" margin="normal" />
          <label htmlFor="icon-button-file">
            <b>Upload Profile:</b>
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          {/* <div className={classes.py_2} /> */}
          {/* <Link className={`${classes.decoration_0} ${classes.float_right}`} to={'/'}><small className={classes.text_muted}>Forgot password?</small></Link> */}
          <div className={classes.py_2} />
          <Button variant="contained" color="primary" size="large" sx={{marginTop: '30px'}} fullWidth>
            Create an account
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default Register
