import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Route, Switch } from "react-router-dom";
import "./assets/scss/styles.scss";
import { useEffect, useState } from "react";
import PrivateRoute from "./core/guards/PrivateRoute";
import { Suspense } from "react";
import Loading from "./components/modules/Loading";
import React from "react";
import { apiProductGetList } from "./api/product/product.api";
const Profile = React.lazy(() => import("./page/Account/Profile"));
const Features = React.lazy(() => import("./page/Features"));
const Auth = React.lazy(() => import("./page/Auth"));

function App() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    apiProductGetList().then((e) => {
      console.log(e);
      setListUser(e.data);
    });
    console.log(process.env.REACT_APP_TEST);
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute path="/account">
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        </PrivateRoute>
        <Route path="/auth">
          <Suspense fallback={<Loading />}>
            <Auth />
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={<Loading />}>
            <Features listUser={listUser}></Features>
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
