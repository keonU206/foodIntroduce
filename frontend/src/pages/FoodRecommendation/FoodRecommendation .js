import React, { useState, useEffect } from "react";
import axios from "axios";
import "./foodRecommendation.css";
import { Navigation, Footer } from "../../components/index";

const FoodRecommendation = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [image_url, setImage_url] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedFood = async () => {
      try {
        const response = await axios.get("/api/recommend-food");
        setName(response.data[0].name);
        setDescription(response.data[0].description);
        setImage_url(response.data[0].image_url);
      } catch (error) {
        console.error("Error fetching recommended food:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedFood();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navigation />
      <h2>점메추!!</h2>
      {name ? (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <img src={image_url} alt={name} />
        </div>
      ) : (
        <div>No recommended food available</div>
      )}
      <Footer />
    </div>
  );
};

export default FoodRecommendation;
