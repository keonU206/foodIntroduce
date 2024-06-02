import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
import { Navigation, Footer } from "../../components/index";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/foods/home");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("/api/restaurants/home");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
    fetchRestaurants();
  }, []);

  return (
    <div className="home-container">
      <Navigation />
      <Link to="/foodList">
        <h1>음식 정보</h1>
      </Link>
      <div className="food-list">
        {foods.map((food) => (
          <Link
            to={`/foods/${food.id}`}
            key={food.id}
            className="food-item-link"
          >
            <div className="food-item">
              <img src={food.image_url} alt={food.name} />
              <div>
                <h2>{food.name}</h2>
                <p>{food.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/add-food">
        <button className="add-food-button">음식 추가하기</button>
      </Link>

      <Link to="/reviewList">
        <h1>음식점 정보</h1>
      </Link>

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
                <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                  {restaurant.name}
                </Link>
              </td>
              <td>{restaurant.address}</td>
              <td>{restaurant.cuisine}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export default Home;
