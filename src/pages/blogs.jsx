import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../assets/customStyles';
import UserBar from '../components/userBar';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { getBlogs, updateBlog } from '../services/blogs';

const Blogs = (props) => {
  const [blog, setBlog] = React.useState([]);
  const [html, setHtml] = useState('');
  const classes = useStyles();

  const populateBlogs = async () => {
    const {data} = await getBlogs();
    setBlog(data[30])
    setHtml(data[30].text)
  }

  function onChange(e) {
    setHtml(e.target.value);
  }

  const handleUpdate = async () => {
    const {data} = await updateBlog(blog._id, html);
    console.log(data);
  }

  useEffect(() => {
    populateBlogs();
  }, [])

  return (
    <h1>Blogs</h1>
  )
}

export default Blogs;
