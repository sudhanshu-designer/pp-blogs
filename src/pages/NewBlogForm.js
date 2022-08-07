import { useRef } from 'react';
import React from 'react'
import classes from './NewBlog.module.css';
import Card from '../components/ui/Card';
import Image from '../addblog.jpg';

export default function NewBlogForm(props) {

const imageInputRef = useRef();
const titleInputRef = useRef();
const descriptionInputRef = useRef();
const authorInputRef = useRef();

const submitHandler = (event) => { 
    event.preventDefault();

    const enteredImage = imageInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;

    const BlogData = {
        image: enteredImage,
        title: enteredTitle,
        description: enteredDescription,
        author: enteredAuthor
    }

    props.onAddBlog(BlogData);
 }

  return (
    <>
    <Card>
    <div className={classes.form_block}>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.image}>
      <img src={Image} alt={Image.alt}/>
      </div>
      <div className={classes.form_content}>
        <div className={classes.form_control}>
          <input type="url" name="url" placeholder="Image" id="image" required="" ref={imageInputRef}/>
        </div>
        <div className={classes.form_control}>
          <input type="text" name="title" placeholder="Title" id="title" required="" ref={titleInputRef}/>
        </div>
        <div className={classes.form_control}>
          <textarea name="url" placeholder="Description" rows="4" id="description" required="" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.form_control}>
          <input type="text" name="url" placeholder="Author" id="author" required="" ref={authorInputRef}/>
        </div>
        <div className={classes.form_button}>
        <button >Add Blog</button>
        </div>
      </div>
   </form>
    </div>
    </Card>
    </>
  )
}
