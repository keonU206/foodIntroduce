import React from "react";
import "./footer.css";

const Footer = () => {
  // 가상의 데이터
  const companyInfo = {
    companyName: "짜구리구리",
    address:
      "인천광역시 미추홀구 석정로126번길 23 한화꿈에그린아파트 107동 701호",
    phoneNumber: "010-1234-5678",
  };

  return (
    <div className="footer">
      <p>{companyInfo.companyName}</p>
      <p>주소: {companyInfo.address}</p>
      <p>전화번호: {companyInfo.phoneNumber}</p>
    </div>
  );
};

export default Footer;
