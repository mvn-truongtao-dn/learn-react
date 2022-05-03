import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaCartArrowDown,
  FaArrowRight,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import useAuth from "../../../hooks/userAuth";

export default function Header() {
  let { isLogged, logout } = useAuth();
  const handleClickLogout = () => {
    logout();
  };
  console.log(localStorage.getItem("user"));
  return (
    <header className="page-header container flex-center justify-content-between ">
      <Link to="#" className="link-logo">
        <img
          src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"
          alt=""
          className="logo"
        />
      </Link>
      <nav className="nav-link ">
        <ul className="menu-link flex">
          <li className="item-menu">
            <Link to="/home" className="item-link">
              Home
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/products" className="item-link">
              Products
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/abouts" className="item-link">
              Abouts
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/sales" className="item-link">
              Sales
            </Link>
          </li>
        </ul>
      </nav>
      <div className="col-group-btns">
        <ul className="group-btns flex">
          {isLogged ? (
            <>
              <li className="btn-item">
                <Link to="/account" className="btn-link">
                  <FaUser />
                </Link>
              </li>
              <li className="btn-item">
                <FiLogIn onClick={handleClickLogout} />
              </li>
            </>
          ) : (
            <li className="btn-item btn-sign-in">
              <Link to="/account" className="btn-link">
                Sign in
              </Link>
            </li>
          )}
          <li className="btn-item">
            <Link to="#" className="btn-link">
              <FaSearch />
            </Link>
          </li>
          <li className="btn-item">
            <Link to="#" className="btn-link">
              <FaHeart />
            </Link>
          </li>
          <li className="btn-item">
            <Link to="#" className="btn-link">
              <FaCartArrowDown />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
