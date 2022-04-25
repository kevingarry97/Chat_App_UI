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
    <>
      <div className={`${classes.flex} ${classes.flex_column} ${classes.pt_5} ${classes.pb_5} ${classes.h_100} ${classes.align_center} ${classes.justify_center}`}>
        <Container maxWidth="lg">
          <UserBar />
          <div style={{ backgroundColor: '#FFF', padding: '30px', paddingBottom: "4em"}}>
            <DefaultEditor value={html} onChange={onChange} />
            <Button variant="contained" size="large" sx={{marginTop: 2}} onClick={handleUpdate}>
              <b>
                Update
              </b>
            </Button>
            {/* <button onClick={() => console.log('HHH ', html)}>Check</button> */}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Blogs;
