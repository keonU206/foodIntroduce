import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigation, Footer } from "../../components";
import "./reviewList.css";

const ReviewList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("/api/restaurants");
        console.log(response.data);
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <Navigation />
      <h1>전체 리뷰 보기</h1>
      <div className="food-table-container">
        <div className="food-table-wrapper">
          <table className="food-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>주소</th>
                <th>요리 종류</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id}>
                  <td>
                    <Link
                      to={`/restaurant/${restaurant.id}`}
                      key={restaurant.id}
                    >
                      {restaurant.name}
                    </Link>
                  </td>
                  <td>{restaurant.address}</td>
                  <td>{restaurant.cuisine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewList;
