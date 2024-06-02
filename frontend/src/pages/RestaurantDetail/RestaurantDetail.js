import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navigation, Footer } from "../../components";
import "./restaurantDetail.css";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(`/api/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error("Error fetching restaurant detail:", error);
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  useEffect(() => {
    if (!restaurant) return;

    const { latitude, longitude } = restaurant;

    // 지도 초기화
    const initMap = () => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
      const marker = new window.kakao.maps.Marker({ position: markerPosition });
      marker.setMap(map);
    };

    initMap();
  }, [restaurant]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const { name, address, cuisine, description } = restaurant;

  return (
    <div className="restaurant-detail">
      <Navigation />
      <h1>{name}</h1>

      <p>
        <strong>주소:</strong> {address}
      </p>
      <p>
        <strong>요리 종류:</strong> {cuisine}
      </p>
      <p>{description}</p>
      <div id="map" className="map"></div>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
