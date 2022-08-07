import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './NewBlog.module.css';
import NewBlogForm from './NewBlogForm'

export default function NewBlogs() {
  const navigate = useNavigate();
  const addBlogHandler = (BlogData) => { 
    fetch('https://ppblog-541ef-default-rtdb.firebaseio.com/blogs.json',
    {
      method: 'POST',
      body: JSON.stringify(BlogData),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    ).then(() => {
      navigate('/');
    });
   }

  return (
    <>
    <div className={classes.container}>
    <div className={classes.form_header}>
    <h2>Write a blog..</h2>
    <p>Share your story with the world. Promote your blog and build your online presence with us.</p>
  </div>
    <NewBlogForm onAddBlog={addBlogHandler}/>
    </div>
    </>
   
  )
}
