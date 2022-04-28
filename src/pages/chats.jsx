import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../assets/customStyles";
import MessageInput from "../components/messageInput";
import MessageList from "../components/messageList";
import SearchBox from "../components/searchBox";
import UsersList from "../components/usersList";
import { getChats, sendChat } from "../services/chats";
import UserBar from '../components/userBar';
import { getRoom } from "../services/room";

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
    const { data } = await getRoom();
    // const users = data.filter((el) => el._id != auth.getCurrentUser()._id)
    setListUsers(data);
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
      room: selectedUser._id,
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
        user.room.toLowerCase().startsWith(query.toLowerCase())  
      )

    return { totalCount: filters.length, data: filters }
  }

  return (
    <h2>Chats</h2>
  )
}

export default Chats;
