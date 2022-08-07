import { createContext, useState } from "react";
import React from 'react'

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteBlog) => {},
    removeFavourite: (blogId) => {},
    itemIsFavourite: (blogId) => {}
});

export function FavouritesContextProvider(props) {

const [userFavourites, setuserFavourites] = useState([]);
const addFavouriteHandler = (favouriteBlog) => { 
    setuserFavourites((prevuserFavourites) => {
        return prevuserFavourites.concat(favouriteBlog);
    });
}
const removeFavouriteHandler = (blogId) => { 
    setuserFavourites(prevuserFavourites => {
        return prevuserFavourites.filter(blog => blog.id !== blogId )
    })
}
const itemIsFavouriteHandler = (blogId) => { 
    userFavourites.some(blog => blog.id === blogId)
}
const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
};

 return <FavouritesContext.Provider value={context}>
    {props.children}
 </FavouritesContext.Provider>
}

export default FavouritesContext;