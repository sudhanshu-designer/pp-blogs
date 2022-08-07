import React from 'react'
import { useContext } from 'react'
import BlogList from '../components/Blogs/BlogList';
import FavouritesContext from '../store/FavouritesContext'
import { Link } from 'react-router-dom';
import Image from '../favourite.jpg'

export default function FavouriteBlogs() {

  const favouritesCtx = useContext(FavouritesContext);
  let content;

  if(favouritesCtx.totalFavourites === 0){
    content = 
    <div className='small-container'>
    <div className='no-favourites-block'>
      <div className='favourite-image'>
    <img src={ Image } alt={ Image.alt } />
    </div>
    <div className='no-favourites-button-block'>
    <p>You got no favourite yet. Start adding some?</p> 
      <ul>
      <li><Link exact to="/">Check Previous Blogs</Link></li>
      <li><Link exact to="/new-blog">Add New Blog</Link></li>
    </ul>
    </div>
    </div>
    </div>
  }
  else{
    content = <BlogList blogs={favouritesCtx.favourites} />
  }

  return (
    <section>
       <div className='static-space-block'>
        <div className='static-content-space'>
            <h2>Find Your Favourities Here</h2>
            <p>Discover stories, thinking, and expertise from writers on any topic.</p>
        </div>
    </div>
    <div className='favourities-block-section'>
      {content}
      </div>
      </section>
  )
}
