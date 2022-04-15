import { Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useStyles } from '../assets/customStyles'

const MessageInput = ({value, onChange}) => {
  const classes = useStyles()
  return (
    <div className={`${classes.flex}`} style={{paddingTop: 20, paddingRight: 40}}>
      <input
        type="text"
        name="query"
        className={`${classes.form_control} ${classes.backgroud_lighter} ${classes.pr_3}`}
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <IconButton sx={{backgroundColor: '#1946a0', paddingRight: 1.8, paddingLeft: 1.8}} aria-label="upload picture" component="span">
        <Send sx={{color: '#fff'}} />
      </IconButton>
    </div>
  )
}

export default MessageInput;
