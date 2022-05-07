import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../assets/customStyles";
import AuthImg from "../assets/me.png";
import { FaSearch, FaEdit, FaPaperPlane } from 'react-icons/fa'
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
    <div className="container-fluid p-0">
      <div className="row h-100">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column justify-content-between h-full">
            <div className="h-full">
              <div className="d-flex justify-content-between p-4 pt-5 border-bottom">
                <div className="media">
                  <img src={AuthImg} className="rounded-circle" style={{objectFit: 'cover'}} width={45} height={45} alt="" />
                  <div className="media-body pl-2">
                    <h6 className="p-0 m-0">Garry Kevin</h6>
                    <p><small>My account</small></p>
                  </div>
                </div>
            
              </div>
              <div className="d-flex justify-content-between px-4 pt-4 pb-2">
                <h6 className="font-weight-bold">Available Users</h6>
                <p className="bg-light px-2 rounded-pill"><small className="font-weight-bold text-primary">10</small></p>
              </div>
              <div className="d-flex mx-4 pb-3" style={{ overflowX: 'scroll'}}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v, i) => (
                  <img key={i} src={AuthImg} className="rounded-circle mx-1" style={{objectFit: 'cover'}} width={55} height={55} alt="" />
                ))}
              </div>
              <div className="d-flex justify-content-between pt-5 pb-2 px-4">
                <h6 className="font-weight-bold">Group Chats</h6>
                <button className="btn btn-light pt-0 px-2 pb-2 rounded-pill"><small className="font-weight-bold text-primary"><FaEdit size={18} color="grey" /></small></button>
              </div>
              <div className="mb-4 mx-4">
                <div class="input-group bg-light py-1 rounded-pill">
                  <div class="input-group-prepend">
                    <span class="input-group-text border-0 bg-light rounded-pill" id="basic-addon1"><FaSearch /></span>
                  </div>
                  <input type="text" class="form-control border-0 bg-light rounded-pill" placeholder="Username" />
                </div>
              </div>
              {[1, 2, 3, 4].map((v, i) => (
                <div className="d-flex justify-content-between px-4 py-2">
                  <div className="media">
                    <img src={AuthImg} className="rounded-circle" style={{objectFit: 'cover'}} width={45} height={45} alt="" />
                    <div className="media-body pl-2">
                      <h6 className="p-0 m-0">Garry Kevin</h6>
                      <p><small className="text-muted">My account</small></p>
                    </div>
                  </div>
                  <small className="text-muted">10:02</small>
                </div>
              ))}
            </div>
            <div className="bg-light m-3 p-3">
              <div className="d-flex justify-content-between">
                <div className="media align-items-center">
                  <small className="text-muted">Sort By:</small>
                  <div className="media-body pl-1">
                    <div class="dropdown">
                      <button class="btn p-0 m-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                        <small>Most Recent</small>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 border-right">
          <div className="d-flex flex-column justify-content-between h-full">
            <div className="p-4 border-bottom">
              <h3>Friends 4r Life</h3>
            </div>
            <div className="h-full">
              <div className="d-flex flex-column my-3">
                {
                  [
                    {'id': 1, 'user': 'Nkurunziza J. Pierre', message: 'Hii, are we going on new year’s holidays?'}, 
                    {'id': 1, 'user': 'me', message: 'Wow, that’s an interesting place'}
                  ]
                  .map((v, i) => (
                    <div className={`d-flex ${v.user !== 'me' ? `justify-content-start` : `justify-content-end`}`}>
                      {v.user === 'me' ? (
                        <div className="d-flex flex-column">
                          <div className="bg-success py-1 px-3 rounded-pill">
                            <span className="text-white">{v.message}</span>
                          </div>
                          <small className="d-flex justify-content-end">33 min</small>
                        </div>
                      ) : (
                        <div className="media align-items-center">
                          <img src={AuthImg} className="rounded-circle" style={{objectFit: 'cover'}} width={55} height={55} alt="" />
                          <div className="media-body pl-2">
                            <h6>{v.user} <small><b className="text-muted">1 d</b></small></h6>
                            <div className="bg-light px-3 py-1 rounded-pill">
                              <small>{v.message}</small>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="bg-light m-3 px-3 py-2 rounded-pill">
              <div className="d-flex justify-content-between">
                <input type="text" className="form-control border-0 bg-light" placeholder="Type Message ..." />
                <button className="btn btn-success pt-0 px-3 pb-2 rounded-pill ml-3"><small className="font-weight-bold text-primary"><FaPaperPlane size={18} color="white" /></small></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="pt-5 pb-3 border-bottom">
            <div className="d-flex flex-column align-items-center">
              <img src={AuthImg} className="rounded-circle" style={{objectFit: 'cover'}} width={100} height={100} alt="" />
              <h4 className="mt-3 font-weight-bold">Friends 4r Life</h4>
              <h6 className="text-muted">@AUCA</h6>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-weight-bold mb-4">12 Participants</h4>
            {[1, 2, 3, 4].map((v, i) => (
              <div className="media py-2">
                <img src={AuthImg} className="rounded-circle" style={{objectFit: 'cover'}} width={45} height={45} alt="" />
                <div className="media-body pl-2">
                  <h6 className="p-0 m-0">Garry Kevin</h6>
                  <p><small className="text-muted">My account</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chats;
