import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../assets/customStyles";

const Chats = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.pt_5} ${classes.pb_5} ${classes.h_100}`} style={{backgroundColor: '#D8DBE3'}}>
      <Container maxWidth="xl" sx={{ backgroundColor: '#F5F7FB', height: '100%', padding: '35px'}} >
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Grid marginBottom={2} paddingY={1} paddingX={4} sx={{backgroundColor: '#fff'}}>
              <h5>Search</h5>
            </Grid>
            <Grid maxWidth paddingX={3} paddingY={1} sx={{backgroundColor: '#fff', height: '100%'}}>
              <h1>Users List</h1>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid maxWidth paddingX={3} paddingY={1} sx={{backgroundColor: '#fff', height: '100%'}}>
              <h1>Messages List</h1>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Chats;
