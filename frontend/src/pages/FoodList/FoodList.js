import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Footer } from "../../components/index";
import { Link } from "react-router-dom";
import "./foodList.css";

const ReviewList = () => {
  const [foods, setFoods] = useState([]);
  const [isLocalHost, setIsLocalHost] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/foods");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const currentHost = window.location.hostname;
    setIsLocalHost(currentHost === "localhost" || currentHost === "127.0.0.1");
  }, []);

  return (
    <div>
      <Navigation />
      <h1>음식 정보</h1>
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

        {isLocalHost && (
          <Link to="/add-food">
            <button className="add-food-button">음식 추가하기</button>
          </Link>
        )}
        <Link to="/recommend-food">
          <button className="recommend-food-button">점심메뉴 추천 받기</button>
        </Link>
        <Footer />
      </div>
    </div>
  );
};

export default ReviewList;
