import React, { useState } from "react";
import axios from "axios";
import "./addFood.css";
import { Navigation, Footer } from "../../components/index";

const AddFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);

      console.log(formData);

      await axios.post("/api/add-food", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("음식이 성공적으로 추가되었습니다!");
      window.location.href = "/";
    } catch (error) {
      console.error("음식 추가 중 오류 발생:", error);
      alert("음식 추가 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <Navigation />
      <h1>음식 추가하기</h1>
      <form onSubmit={handleSubmit} method="post">
        <label>
          음식 이름:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          음식 설명:
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          가격:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          이미지 파일 선택:
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <button type="submit">추가하기</button>
      </form>
      <Footer />
    </div>
  );
};

export default AddFood;
