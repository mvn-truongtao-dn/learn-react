import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// import Products from "./Products/index";
// import ProductItem from "./ProductItem/index";
import Home from "./Home";
import { Suspense } from "react";
import Loading from "../../components/modules/Loading";
const Products = React.lazy(() => import("./Products/index"));
const ProductItem = React.lazy(() => import("./ProductItem/index"));
const Abouts = React.lazy(() => import("./Abouts/index"));
const Sales = React.lazy(() => import("./Sales/index"));
export default function Features({ listUser }) {
  const {path, url } = useRouteMatch();
  console.log(path);

  return (
    <main className="page-main">
      <h1>Feature</h1>
      <Switch>
        <Route path={`${path}home`}>
          <Home />
          {/* <Products listUser={listUser} /> */}

        </Route>
        <Route path="/products">
          {/* <Suspense fallback={<Loading />}> */}
            <Products listUser={listUser} />
          {/* </Suspense> */}
        </Route>
        <Route path="/product/:productId">
          <Suspense fallback={<Loading />}>
            <ProductItem listUser={listUser} />
          </Suspense>
        </Route>
        <Route path="/abouts">
          <Suspense fallback={<Loading />}>
            <Abouts />
          </Suspense>
        </Route>
        <Route path="/sales">
          <Suspense fallback={<Loading />}>
            <Sales />
          </Suspense>
        </Route>
      </Switch>
    </main>
  );
}
