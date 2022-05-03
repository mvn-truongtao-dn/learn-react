import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Truncate from "../../../core/truncate";
import Rating from "../Rating";

export default function ProductItem({ item }) {
  const { title, image, id,price,description } = item;
  const description_truncate = Truncate(description);
  return (
    <div className="details-product">
      <Link to={`/product/${id}`}>
        <img className="image-product" src={image}></img>
        <div className="content-product">
          <h1 className="name-product">{title}</h1>
          <span className="price-product">{price}</span>
          <p className="description-product">{description_truncate}</p>
          <Rating rate={item.rating.rate}></Rating>
        </div>
      </Link>
    </div>
  );
}
