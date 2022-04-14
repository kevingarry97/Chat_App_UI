import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../assets/customStyles";
import MessageList from "../components/messageList";
import SearchBox from "../components/searchBox";
import UsersList from "../components/usersList";

const Chats = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.pt_5} ${classes.pb_5} ${classes.h_100}`} style={{backgroundColor: '#D8DBE3'}}>
      <Container maxWidth="xl" sx={{ backgroundColor: '#F5F7FB', height: '100%', padding: '35px'}} >
        <Grid container spacing={4} style={{height: '90%'}}>
          <Grid item xs={4}>
            <Grid marginBottom={2} paddingY={1} paddingX={2}>
              <SearchBox value={''} onChange={() => console.log('Logging')} />
            </Grid>
            <Grid maxWidth paddingX={3} paddingY={1} sx={{backgroundColor: '#fff', height: '105%'}}>
              <UsersList />
            </Grid>
          </Grid>
          <Grid item xs={8} marginTop={2} maxHeight>
            <Grid maxWidth paddingX={3} paddingY={1} sx={{backgroundColor: '#fff', height: '117%'}}>
              <MessageList />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Chats;
