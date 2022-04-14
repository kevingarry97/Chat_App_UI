import React from 'react'
import { useStyles } from '../assets/customStyles'

const MessageList = () => {
  const classes = useStyles()
  return (
    <>
      {[{no: 1, name: 'jack'}, {no: 2, name: 'Han'}, {no: 3, name: 'han'}, {no: 4, name: 'han'}, {no: 5, name: 'jack'}].map((item, key) => (
        <div key={key} className={`${classes.flex}  ${classes.flex_column} ${item.name == "han" ? classes.align_end : classes.align_start}`}>
          <div className={`${classes.backgroud_light} ${classes.p_5}`}>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default MessageList;
