import React from 'react';
import { Container } from '@mui/material';
import { useStyles } from '../assets/customStyles';

const Register = () => {
  const classes = useStyles()
  return (
    <div className={`${classes.flex} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
      <Container maxWidth="sm" sx={{ backgroundColor: '#FFF'}}>
        <h1>Register</h1>
      </Container>
    </div>
  )
}

export default Register
