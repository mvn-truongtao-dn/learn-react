import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Listuser from "./components/Listuser";
import ListuserAPI from "./components/ListuserAPI";
import Home from "./components/page/Home";

function App() {
  const [list, setList] = useState([
    {
      id: 5,
      name: "tao quang truong",
      password: "123456789",
      country: "vn",
      gender: "male",
      info: "abcd",
      accpect: true,
    },
    {
      id: 2,
      name: "tao quang truong",
      password: "123456789",
      country: "vn",
      gender: "male",
      info: "abcd",
      accpect: true,
    },
    {
      id: 4,
      name: "tao quang truong",
      password: "123456789",
      country: "vn",
      gender: "male",
      info: "abcd",
      accpect: true,
    },
  ]);
  const [page, setPage] = useState("home");
  const handleAddUser = (item) => {
    setList([...list, item]);
  };
  const handleDelete = (item) => {
    const objectDelete = list.filter((i) => i.id !== item.id);
    console.log(objectDelete);
    setList(objectDelete);
  };
  const handleRedirect = (e, pageName) => {
    e.preventDefault();
    setPage(pageName);
  };
  console.log(list);

  return (
    <>
      <div className="nav-menu">
        <ul className="list-menu">
          <li className="item-menu">
            <a
              href=""
              className="link-item"
              onClick={(e) => handleRedirect(e, "home")}
            >
              Home
            </a>
          </li>
          <li className="item-menu">
            <a
              href=""
              className="link-item"
              onClick={(e) => handleRedirect(e, "listuserapi")}
            >
              List_user_api
            </a>
          </li>
        </ul>
      </div>
      <div className="App">
        {page === "home" ? (
          <Home
            list={list}
            handleAddUser={handleAddUser}
            handleDelete={handleDelete}
          ></Home>
        ) : (
          <ListuserAPI></ListuserAPI>
        )}
      </div>
    </>
  );
}

export default App;
