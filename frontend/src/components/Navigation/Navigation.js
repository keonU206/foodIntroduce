import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <Link to={"/home"}>
        <span className="left-content">짜구리</span>
      </Link>
      <ul className="nav-menu right-content">
        <li>
          <a href="/intro">자기 소개</a>
        </li>
        <li>
          <a href="/foodList">음식 소개</a>
        </li>
        <li>
          <a href="/reviewList">가게 소개</a>
        </li>
        <li>
          <a href="/location">찾아 오시는 길</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
