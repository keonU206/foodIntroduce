import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation, Footer } from "../../components";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        const response = await axios.get(`/api/foods/${id}`);
        setFood(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
      } catch (error) {
        console.error("Error fetching food detail:", error);
      }
    };

    fetchFoodDetail();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }

      await axios.put(`/api/foods/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("음식이 성공적으로 수정되었습니다!");
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("음식 수정 중 오류 발생:", error);
      alert("음식 수정 중 오류가 발생했습니다.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/foods/${id}`);
      alert("음식이 성공적으로 삭제되었습니다!");
      navigate("/");
    } catch (error) {
      console.error("음식 삭제 중 오류 발생:", error);
      alert("음식 삭제 중 오류가 발생했습니다.");
    }
  };

  if (!food) {
    return <div>Loading...</div>;
  }

  const isLocalHost = window.location.hostname === "localhost";

  return (
    <div>
      <Navigation />
      <h1>{isEditing ? "음식 수정하기" : food.name}</h1>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <label>
            음식 이름:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            음식 설명:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <label>
            가격:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
          {isLocalHost && <button type="submit">수정하기</button>}
        </form>
      ) : (
        <div>
          <img src={food.image_url} alt={food.name} />
          <p>{food.description}</p>
          <p>{food.price}$</p>
        </div>
      )}
      {isLocalHost && (
        <div>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "취소" : "수정"}
          </button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FoodDetail;
