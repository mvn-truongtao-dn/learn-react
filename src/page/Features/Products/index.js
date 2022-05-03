import React, { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Loading from "../../../components/modules/Loading";
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
