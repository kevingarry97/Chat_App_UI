import React from 'react';
import { useStyles } from '../assets/customStyles'
import moment from 'moment';
 
const UsersList = ({users: listUsers, selectUser, selectedUser}) => {
  const classes = useStyles();

  return (
    <>
      {listUsers.data.map((list, key) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href='#' onClick={() => selectUser(list)} key={key} className={`${classes.flex} ${classes.decoration_0} ${classes.flex_row} ${classes.justify_between} ${classes.border_bottom} ${selectedUser && selectedUser._id == list._id && classes.backgroud_lighter} ${classes.pr_3}`}>
          <div className={`${classes.flex} ${classes.align_center}`}>
            {/* <img src={list.profileUrl} alt="" width={60} height={60} style={{margin: 8, borderRadius: '50%'}} /> */}
            <div className=''>
              <h4 style={{margin: 5, padding: 0, color: '#000'}}>{list.room}</h4>
              <h6 className={`${classes.text_muted}`} style={{margin: 5, padding: 0}}>{list.creator.uername}</h6>
            </div>
          </div>
          <h6 className={classes.text_muted}>{moment(list.createdAt).format('h:mm')}</h6>
        </a>
      ))}
    </>
  )
}

export default UsersList;
