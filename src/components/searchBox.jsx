import React from 'react'
import { useStyles } from '../assets/customStyles'

const SearchBox = ({value, onChange}) => {
  const classes = useStyles();
  return (
    <input
      type="text"
      name="query"
      className={classes.form_control}
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  )
}

export default SearchBox;
