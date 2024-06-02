import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  FoodDetail,
  AddFood,
  Intro,
  Location,
  RestaurantDetail,
  ReviewList,
  FoodList,
  FoodRecommendation,
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/location" element={<Location />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/reviewList" element={<ReviewList />} />
        <Route path="/foodList" element={<FoodList />} />
        <Route path="/recommend-food" element={<FoodRecommendation />} />
      </Routes>
    </div>
  );
}

export default App;
