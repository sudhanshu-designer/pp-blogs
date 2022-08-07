import React from 'react'


export default function StaticBlog(props) {

    function WordCount(str) { 
        return str.split(" ").length * 0.02 ;
    }

    return (
    <>
    <div className='static-space-block'>
        <div className='static-content-space'>
            <h2>{props.main_title}</h2>
            <p>{props.main_content}</p>
        </div>
    </div>
    <div className='small-container'>
    <div className='static-blog-block gridBlock'>
        <div className='static-image-item'>
            <img src={props.image} alt={props.image.alt}/>
        </div>
        <div className='static-content-block'>
            <div className='static-content-block-box'>
            <div className='article-description'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div>
            <div className='article-time'>
                <span>May 20 • {WordCount(props.description)} mins</span>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
