import React, { useState } from 'react';
import { Button, Container, TextField, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useStyles } from '../assets/customStyles';
import { Link } from 'react-router-dom';
import { PhotoCamera } from '@mui/icons-material';
import styled from '@emotion/styled';
import { createUser } from '../services/user';

const Register = () => {
  const classes = useStyles();
  const [data, setData] = useState({username: '', email: '', password: '', role: ''});
  const [upload, setUpload] = useState('')
  
  const handleChange = ({target}) => {
    const reader = new FileReader();
    // eslint-disable-next-line no-cond-assign
    // console.log(target);
    if(target.name == "file") setUpload(target.files[0])
    setData({...data, [target.name]: target.value})
  }

  const Input = styled('input')({
    display: 'none',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log('Results ', data);
    console.log('Uploads ', upload);
    const result = await createUser(data, upload);
  }

  return (
    <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
      <Container maxWidth="sm" sx={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "4em"}}>
        <h1 style={{margin: 3, padding: 0}} className={classes.text_normal}>Sign Up with your Information</h1>
        <small className={classes.text_muted}>Already have an account? </small>
        <small className={classes.text_muted}><Link to={"/register"}><b>Sign In</b></Link></small>
        <form onSubmit={handleSubmit} className={classes.pt_5}>
          <label htmlFor=""><b>Username:</b></label>
          <TextField name='username' value={data.username} onChange={handleChange} fullWidth label="kevin123" margin="normal" />
          <label htmlFor=""><b>Email:</b></label>
          <TextField name='email' type={'email'} onChange={handleChange} value={data.email} fullWidth label="name@mail.com" margin="normal" />
          <label htmlFor=""><b>User Role:</b></label>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Choose Role:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.role}
                name="role"
                onChange={handleChange}
                label="Age"
              >
                {['moderator', 'user'].map((item, key) => (
                  <MenuItem value={item} key={key}>{item}</MenuItem>
                ))}
              </Select>
          </FormControl>
          <label htmlFor=""><b>Password:</b></label>
          <TextField type={'password'} name='password' value={data.password} onChange={handleChange} fullWidth label="6+ character, 1 Capital letter" id="fullWidth" margin="normal" />
          <label htmlFor="icon-button-file">
            <b>Upload Profile:</b>
            {/* <input type="file" name="file" onChange={handleChange} /> */}
            <Input accept="image/*" id="icon-button-file" type="file" name='file' onChange={handleChange} />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          {/* {data.file && <div style={{paddingLeft: 10, paddingTop: 10}}>
            <img src={data.file} width="100" height="100" alt="" />
          </div>} */}
          {/* <div className={classes.py_2} /> */}
          {/* <Link className={`${classes.decoration_0} ${classes.float_right}`} to={'/'}><small className={classes.text_muted}>Forgot password?</small></Link> */}
          <div className={classes.py_2} />
          <Button variant="contained" type='submit' color="primary" size="large" sx={{marginTop: '30px'}} fullWidth>
            Create an account
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default Register
