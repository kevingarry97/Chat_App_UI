import { Container } from '@mui/material';
import React from 'react';
import { useStyles } from '../assets/customStyles';
import UserBar from '../components/userBar';

const Blogs = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`${classes.flex} ${classes.flex_column} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
        <Container maxWidth="md">
          <UserBar />
          <div style={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "4em"}}>

          </div>

        </Container>
      </div>
    </>
  )
}

export default Blogs;
