import React from 'react'
import { useStyles } from '../assets/customStyles'
import AuthImage from '../assets/auth_image.svg';

const MessageList = () => {
  const classes = useStyles()
  return (
    <div style={{overflow: 'scroll', overflowX: 'hidden'}}>
      {[{no: 1, name: 'jack'}, {no: 2, name: 'han'}, {no: 3, name: 'han'}, {no: 4, name: 'han'}, {no: 5, name: 'jack'}, {no: 1, name: 'jack'}, {no: 2, name: 'han'}, {no: 3, name: 'han'},{no: 1, name: 'jack'}, {no: 2, name: 'han'}, {no: 3, name: 'han'}].map((item, key) => (
        <div key={key} className={`${classes.flex}  ${classes.flex_column} ${item.name == "han" ? classes.align_end : classes.align_start} ${classes.border_5}`}>
          {item.name == 'jack' ? (
            <div className={classes.flex}>
              <img src={AuthImage} alt="" width={60} height={60} style={{margin: 8, borderRadius: '50%'}} />
              <div className={`${classes.backgroud_light} ${classes.p_5}`}>
                <p>{item.name}</p>
              </div>
            </div>
          ) : (
            <div className={`${classes.background_primary} ${classes.p_5}`}>
              <p>{item.name}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MessageList;
