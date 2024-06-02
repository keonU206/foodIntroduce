import React, { useEffect } from "react";
import "./location.css";
import { Navigation, Footer } from "../../components";

const Location = () => {
  useEffect(() => {
    // Kakao Maps API 스크립트를 동적으로 로드
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=051fd0fbe84fb20cad3ac5e6c45ca86e";
    script.async = true;
    document.head.appendChild(script);

    // 스크립트 로드 완료 후 지도를 초기화
    script.onload = () => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(
          37.467531237625074,
          126.65015092918607
        ),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(
        37.467531237625074,
        126.65015092918607
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    };

    // 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="page-container">
      <Navigation />
      <div className="location-container">
        <div className="directions">
          <h2>찾아오시는 길</h2>
          <p>주소: 인천광역시 미추홀구 석정로 126</p>
          <p>전화: 010-3158-9803</p>
          <p>이메일: ty9803@naver.com</p>
          <p>대중교통: 지하철 1호선 제물포역 2번 출구 도보 5분</p>
        </div>
        <div id="map" className="map"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
