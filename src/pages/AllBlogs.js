import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from '../components/Blogs/BlogList';

const dummyData = [
    {
        id: 'b1',
        image: 'https://cdn.shopify.com/s/files/1/0655/4760/0108/files/blog-1.png?v=1659859614',
        title: 'More Human than Human',
        description: 'What does it mean to be human? Is it about having emotions? Do the relationships we form make us special? Or is humanity just a program that can be emulated?',
        author:'Keshav Syal'
    },
    {
        id: 'b2',
        image: 'https://cdn.shopify.com/s/files/1/0655/4760/0108/files/blog-3.png?v=1659859614',
        title: 'Invest in your relationship with yourself',
        description: 'We all have a tendency to put others first, but in doing so, we can sometimes neglect our relationship with ourselves. Let me be your advocate and show you a kinder, gentler way to treat the most important person in your life.',
        author:'Sanchit Chawla'
    },
    {
        id: 'b3',
        image: 'https://cdn.shopify.com/s/files/1/0655/4760/0108/files/blog-2.png?v=1659859614',
        title: 'Improve your relationship with others',
        description: 'Be your best self, alone and with others, and cultivate deep and lasting friendships and relationships.',
        author:'Diya Dogra'
    }
]

export default function AllBlogs() {

    const [isLoading, setisLoading] = useState(true);
    const [loadedBlogs, setloadedBlogs] = useState([]);

    useEffect(() => {
      setisLoading(true);
      fetch('https://ppblog-541ef-default-rtdb.firebaseio.com/blogs.json'
      ).then(response => {
        return response.json();
      }).then(data => {
        const blogs = [];
        for(const key in data){
          const blog = {
              id: key,
              ...data[key]
          };
            blogs.push(blog);
        }
        setisLoading(false);
        setloadedBlogs(blogs); 
      });
    },[])
    
    if(isLoading){
      return(
        <section className='small-container'>
          <p>Loading...</p>
        </section>
      )
    }

  return (
    <>
      <div className='blogs-container'>
      <BlogList blogs={dummyData} />
      <BlogList blogs={loadedBlogs} />
      </div>
     </>
  )
}
