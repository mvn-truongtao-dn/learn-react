import React from "react";
import Rating from "../../../../components/modules/Rating";

export default function DetailsProduct({ item }) {
  const { title, image, price, description } = item;
  return (
    <div className="flex">
      <div className="details-product">
        <img className="image-product" src={image} alt={title}></img>
      </div>
      <div className="content-product content-product-deatails">
        <h1 className="name-product">{title}</h1>
        <span className="price-product">{price}</span>
        <p className="description-product">{description}</p>
        <Rating rate={item.rating.rate}></Rating>
        <button className="btn btn-AddToCart">Add To Cart</button>
      </div>

    </div>
  );
}
