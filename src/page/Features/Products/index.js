import React from "react";
import ProductItem from "../../../components/modules/ProductItem";

export default function Products({ listUser }) {
  return (
    <>
      <main className="page-main container">
        <h1>It is page Products</h1>
        <div className="list-products flex-center justify-content-center">
          {listUser.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
