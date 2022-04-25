import React, {useEffect, useState} from 'react';
import { useStyles } from '../assets/customStyles';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import auth, { getUser } from '../services/auth';
import { Link } from 'react-router-dom';

const UserBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setuser] = useState('');
  const classes = useStyles()
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const populateUser = async () => {
    const {data} = await getUser();
    setuser(data);
  }

  const handleOut = () => {
    auth.logout();
    window.location = "/";
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(() => {
    populateUser();
  }, [])
  
  return (
    <div className={`${classes.flex} ${classes.flex_column} ${classes.align_end} ${classes.m_5}`}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleClick} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user.profileUrl} />
          <div className={`${classes.flex} ${classes.flex_column} ${classes.align_start} ${classes.pl_2}`}>
            <h6 style={{margin: 0, padding: 0}}>{user.username}</h6>
            <h6 style={{margin: 0, padding: 0}}><small>{user.email}</small></h6>
          </div>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <MenuItem>
            <Link to={'/profile'} className={`${classes.decoration_0} ${classes.text_black}`}>
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/message'} className={`${classes.decoration_0} ${classes.text_black}`}>
              Messages
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/blog'} className={`${classes.decoration_0} ${classes.text_black}`}>
              Blogs
            </Link>
          </MenuItem>
        {user.role !== 'admin' && <MenuItem>
          <Link to={'/register'} className={`${classes.decoration_0} ${classes.text_black}`}>
            Create User
          </Link>
        </MenuItem>}
        <MenuItem onClick={handleOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default UserBar;
