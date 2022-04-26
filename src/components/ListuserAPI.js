import React, { useEffect, useState } from "react";
import ItemuserAPI from "./ItemuserAPI";
import Pagination from "./Pagination";

export default function ListuserAPI() {
  const [listUser, setListUser] = useState([]);
  const [paginate, setPaginate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  var list_paginate = [];
  const hanleClick = (item) => {
    console.log("ok");
    setCurrentPage(item);
    console.log(currentPage);
    getUser(currentPage);
  };
  const handlePrev = () => {
    if (currentPage === 1) {
      return setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage === paginate[paginate.length - 1]) {
      return setCurrentPage(paginate[paginate.length - 1]);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const getUser = (params) => {
    fetch(`https://reqres.in/api/users?page=${params}`)
      .then((response) => response.json())
      .then((data) => {
        for (var i = 1; i <= data.per_page; i++) {
          list_paginate.push(i);
        }
        console.log(data);
        setListUser(data.data);
        setPaginate(list_paginate);
      });
  };
  useEffect(() => {
    getUser(currentPage);
  }, [currentPage]);
  console.log(paginate[5]);
  return (
    <div className="listuser">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        { listUser.length > 0 && 
        <tbody>
          { listUser.map((item, index) => (
            <ItemuserAPI key={index.toString()} data={item}></ItemuserAPI>
          ))}
        </tbody>
        }
      </table>
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        hanleClick={hanleClick}
        handlePrev={handlePrev}
        handleNext={handleNext}
      ></Pagination>
    </div>
  );
}
