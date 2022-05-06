import React from "react";
import { Link } from "react-router-dom";
import Truncate from "../../../core/truncate";
import Rating from "../Rating";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../store/favSlice";

export default function ProductItem({ item }) {
  const { title, image, id, price, description } = item;
  const favs = useSelector((state) => state.favorite.value);
  const dispatch = useDispatch();

  const description_truncate = Truncate(description);
  const handleFavorite = (e, value) => {
    e.preventDefault();
    console.log("ok");
    dispatch(toggle(value));
  };
  return (
    <div className="details-product">
      <Link to={`/product/${id}`}>
        <img className="image-product" src={image} alt={title}></img>
        <div className="content-product">
          <h1 className="name-product">{title}</h1>
          <span className="price-product">{price}</span>
          <p className="description-product">{description_truncate}</p>
          <Rating rate={item.rating.rate}></Rating>
        </div>
      </Link>
      {/* <MdFavorite className="btn-favorite-active"/> */}

      <button onClick={(e) => handleFavorite(e, item)}>
        {favs.includes(item) ? (
          <MdFavorite className="btn-favorite btn-favorite-active" />
        ) : (
          <MdOutlineFavoriteBorder className="btn-favorite" />
        )}
      </button>
    </div>
  );
}
