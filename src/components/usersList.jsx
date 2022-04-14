import React, { useEffect, useState } from 'react'
import { useStyles } from '../assets/customStyles'
import AuthImage from '../assets/auth_image.svg'
import { usersList } from "../services/user";
 
const UsersList = () => {
  const classes = useStyles();
  const [listUsers, setListUsers] = useState([])
  
  useEffect(() => {
    (async () => {
      const { data } = await usersList();
      setListUsers(data);
      
    })()
  })
  return (
    <>
      {listUsers.map((list, key) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href='#' key={key} className={`${classes.flex} ${classes.decoration_0} ${classes.flex_row} ${classes.justify_between} ${classes.border_bottom}`}>
          <div className={`${classes.flex} ${classes.align_center}`}>
            <img src={list.profileUrl} alt="" width={60} height={60} style={{margin: 8, borderRadius: '50%'}} />
            <div className=''>
              <h4 style={{margin: 5, padding: 0, color: '#000'}}>{list.username}</h4>
              <h6 className={`${classes.text_muted}`} style={{margin: 5, padding: 0}}>{list.email}</h6>
            </div>
          </div>
          <h5 className={classes.text_muted}>09:00</h5>
        </a>
      ))}
    </>
  )
}

export default UsersList;
