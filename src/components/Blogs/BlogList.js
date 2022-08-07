import React from 'react'
import BlogItem from './BlogItem';
import classes from './BlogItem.module.css';

export default function BlogList(props) {
  return (
    <div className={classes.small_container}>
    <ul className={classes.item_group}>
        {props.blogs.map((blog) => 
        <BlogItem 
        key={blog.id}
        image={blog.image}
        title={blog.title}
        description={blog.description}
        author={blog.author}
        />)}
    </ul>
    </div>
  )
}
