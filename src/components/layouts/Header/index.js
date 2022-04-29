import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaCartArrowDown } from "react-icons/fa";

export default function index() {
  return (
    <header className="page-header container flex-space-between">
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
            <Link to="/" className="item-link">
              Home
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/about-us" className="item-link">
              About Us
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/user-list" className="item-link">
              List User
            </Link>
          </li>
        </ul>
      </nav>
      <div className="col-group-btns">
        <ul className="group-btns flex">
          <li className="btn-item">
            <Link to="#" className="btn-link">
              <FaSearch />
            </Link>
          </li>
          <li className="btn-item">
            <Link to="#" className="btn-link">
              <FaUser />
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
