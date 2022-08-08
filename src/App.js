import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllBlogs from './pages/AllBlogs';
import NewBlogs from './pages/NewBlogs';
import FavouriteBlogs from './pages/FavouriteBlogs';
import About from './pages/About';
import StaticBlog from './components/StaticBlog';
import Image from './blog-image.jpg';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
  <Header/>
  <Routes>
  <Route exact path="/"  element={<><StaticBlog main_title="Publish your passions, your way" main_content="Discover stories, thinking, and expertise from writers on any topic." title="FRIENDSHIP, THE KIND THAT LASTS A LIFETIME" description="Many of us have friends in our lives over the years. Some friends we make as children and then lose contact as we grow older. Other friends we make as adults and stay in touch with as long as we are in close proximity to and it is convenient to keep in touch but then over time one moves away or busy schedules slowly pull us apart and we start to lose touch.  Those friendships fall into the “good friends” or “close friends” as the opening quote cites. These are our true friends, and when one comes into your life cherish it!" image={Image}/><AllBlogs/><ContentSection/></>}></Route>
  <Route path="/favourite-blogs" element={<FavouriteBlogs/>}></Route>
  <Route path="/about-me" element={<About/>}></Route>
  <Route path="/new-blog" element={<NewBlogs/>}></Route>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
