import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../assets/customStyles";
import MessageInput from "../components/messageInput";
import MessageList from "../components/messageList";
import SearchBox from "../components/searchBox";
import UsersList from "../components/usersList";
import auth from "../services/auth";
import { getChats, sendChat } from "../services/chats";
import { usersList } from "../services/user";
import UserBar from '../components/userBar';

const Chats = () => {
  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [listUsers, setListUsers] = useState([]);
  const [listChats, setChats] = useState([]);
  const classes = useStyles();

  const handleSearch = (query) => {
    setQuery(query);
  }

  const populateUsers = async () => {
    const { data } = await usersList();
    const users = data.filter((el) => el._id != auth.getCurrentUser()._id)
    setListUsers(users);
  }

  const populateChats = async (user) => {
    const {data} = await getChats(user._id);
    setChats(data);
  }
  
  const handleUser = (user) => {
    setSelectedUser(user);
    populateChats(user);
  }

  const handleMessage = async (message) => {
    const payload = {
      user: selectedUser,
      message
    };

    await sendChat(payload);
    populateChats(selectedUser);
  }

  useEffect(() => {
    populateUsers();
    // populateChats();
  }, [])


  const getData = () => {
    let filters = listUsers;

    if(query)
      filters = listUsers.filter(user => 
        user.username.toLowerCase().startsWith(query.toLowerCase())  
      )

    return { totalCount: filters.length, data: filters }
  }

  return (
    <div className={`${classes.pt_5} ${classes.pb_5} ${classes.h_100}`} style={{backgroundColor: '#D8DBE3'}}>
      <Container maxWidth="xl" sx={{ backgroundColor: '#F5F7FB', height: '100%', padding: '35px'}} >
        <Grid container spacing={4} style={{height: '90%'}}>
          <Grid item xs={4}>
            <Grid marginBottom={2} paddingY={1} paddingX={2}>
              <SearchBox value={query} changeHandler={handleSearch} />
            </Grid>
            <Grid maxWidth paddingX={2} paddingY={1} sx={{backgroundColor: '#fff', height: '105%'}}>
              <UsersList users={getData()} selectUser={handleUser} selectedUser={selectedUser}  />
            </Grid>
          </Grid>
          <Grid item xs={8} maxHeight>
            <UserBar />
            {selectedUser && <Grid maxWidth paddingX={3} paddingY={1} sx={{backgroundColor: '#fff', height: '107%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              {listChats.length > 0 ? <MessageList listChats={listChats} /> : <div className={`${classes.flex} ${classes.flex_column} ${classes.justify_center} ${classes.align_center} ${classes.justify_center}`}> No Messages </div>}
              <MessageInput onMessage={(message) => handleMessage(message)} />
            </Grid>}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Chats;
