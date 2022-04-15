import { Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from '../assets/customStyles'

const MessageInput = ({onMessage}) => {
  const [message, setMessage] = useState('');
  const classes = useStyles();

  const handleChange = ({target}) => {
    setMessage(target.value);
  }

  const handleMessage = () => {
    onMessage(message);
    setMessage('');
  }

  return (
    <div className={`${classes.flex}`} style={{paddingTop: 20, paddingRight: 40}}>
      <input
        type="text"
        name="query"
        className={`${classes.form_control} ${classes.backgroud_lighter} ${classes.pr_3}`}
        placeholder="Search..."
        value={message}
        onChange={handleChange}
      />
      <IconButton onClick={handleMessage} sx={{backgroundColor: '#1946a0', paddingRight: 1.8, paddingLeft: 1.8}} aria-label="upload picture" component="span">
        <Send sx={{color: '#fff'}} />
      </IconButton>
    </div>
  )
}

export default MessageInput;
