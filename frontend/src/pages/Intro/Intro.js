import React from "react";
import "./intro.css";
import { Navigation, Footer } from "../../components";

const Intro = () => {
  return (
    <div className="intro-container">
      <Navigation />
      <div className="center-content">
        <img
          src={require("./logo512.png")}
          alt="profile-img"
          className="profile-image"
        />
        <div className="profile-details">
          <h2>이름: 김건우</h2>
          <p>나이: 24세</p>
          <p>관심 분야: 패션, 예술</p>
          <p>인생의 목표: 락스타 되기</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Intro;
