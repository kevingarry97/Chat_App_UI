import React from 'react'
import { useStyles } from '../assets/customStyles'
import AuthImage from '../assets/auth_image.svg';
import auth from '../services/auth';

const MessageList = ({listChats}) => {
  const classes = useStyles();

  return (
    <div style={{overflow: 'scroll', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      {listChats.map((item, key) => (
        <div key={key} className={`${classes.flex}  ${classes.flex_column} ${item.from.username == auth.getCurrentUser().username ? classes.align_end : classes.align_start} ${classes.border_5}`}>
          {item.from.username != auth.getCurrentUser().username ? (
            <div className={classes.flex}>
              <img src={item.room.creator.profileUrl} alt="" width={60} height={60} style={{margin: 8, borderRadius: '50%'}} />
              <div className={`${classes.backgroud_light} ${classes.p_5}`}>
                <p>{item.message}</p>
              </div>
            </div>
          ) : (
            <div className={`${classes.background_primary} ${classes.p_5}`}>
              <p>{item.message}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MessageList;
