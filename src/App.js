import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { Features, Profile } from "./page/index";
import "./assets/scss/styles.scss";
import { useEffect, useState } from "react";
// import Auth from "./page/Auth";
import PrivateRoute from "./core/guards/PrivateRoute";
import { Suspense } from "react";
import Loading from "./components/modules/Loading";
import React from "react";
import useAuth from "./hooks/userAuth";
import Home from "./page/Features/Home";
import { Login, Register } from "./page";
import Abouts from "./page/Features/Abouts";
const Profile = React.lazy(() => import("./page/Account/Profile"));
const Features = React.lazy(() => import("./page/Features"));
const Auth = React.lazy(() => import("./page/Auth"));

function App() {
  let { isLogged } = useAuth();
  const [listUser, setListUser] = useState([]);
  const getUser = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setListUser(json));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(listUser);
  console.log(isLogged);
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
        {/* <Route path="/app" component={Auth} /> */}

        {/* <Route path="/">
          <Suspense fallback={<Loading />}>
            <Features listUser={listUser}></Features>
          </Suspense>
        </Route> */}
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
