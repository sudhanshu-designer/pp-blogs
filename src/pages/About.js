import React from 'react'
import StaticBlog from '../components/StaticBlog';
import Image from '../developer.png';

export default function About() {
  return (
    <>
    <div className='about-block-section'>
    <StaticBlog main_title="Designer & Frontend Developer" main_content="I share a lot of helpful resources for developers and also curate some resources myself." title="Hello, Nice to meet you!" description="
My name is Sudhanshu and I enjoy creating things that live on the internet. With over 5 years of experience in web development and building tools to help businesses grow. Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, and a huge corporation." image={Image}/>
    </div>
    </>
  )
}
