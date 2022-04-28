import logo from "./logo.svg";
import "./assets/scss/styles.scss";
import { Header, Footer } from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import UserList from "./pages/UserList";
import { useEffect, useState } from "react";
function App() {
  const [listUser, setListUser] = useState([])
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setListUser(data.data));
  }, []);
  console.log(listUser);
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home listuser={listUser}/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
