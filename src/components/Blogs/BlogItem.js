import React from "react";
import Card from "../ui/Card";
import { useContext } from "react";
import Icon from "../../heart.png";

import classes from "./BlogItem.module.css";
import FavouritesContext from "../../store/FavouritesContext";

export default function BlogItem(props) {
  function WordCount(str) {
    return str.split(" ").length * 0.08;
  }

  const favouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        image: props.image,
        title: props.title,
        description: props.description,
        author: props.author
      });
    }
  };

  return (
    <>
      <li className={classes.item}>
        <Card>
          <div className={classes.image_box}>
            <img src={props.image} alt={props.image.alt} />
            <button onClick={toggleFavouriteStatusHandler}>
           <img src={Icon} alt={Icon.alt} />
            </button>
          </div>
          <div className={classes.content_box}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>
              {props.author} • {WordCount(props.description)} mins
            </span>
            
          </div>
        </Card>
      </li>
    </>
  );
}
