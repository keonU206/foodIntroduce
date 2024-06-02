const connection = require("../db/connection");

const FoodModel = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM foods", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  findHome: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM foods ORDER BY id ASC LIMIT 3",
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM foods WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          if (results.length === 0) {
            return reject(new Error("Food not found"));
          }
          resolve(results[0]);
        }
      );
    });
  },

  addFood: ({ name, description, imageURL, price }) => {
    return new Promise((resolve, reject) => {
      const foodData = {
        name: name,
        description: description,
        image_url: imageURL,
        price: price,
      };

      connection.query(
        "INSERT INTO foods SET ?",
        foodData,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve({ id: results.insertId, ...foodData });
        }
      );
    });
  },

  deleteFood: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM foods WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          if (results.affectedRows === 0) {
            return reject(new Error("Food not found"));
          }
          resolve({ message: "Food deleted successfully" });
        }
      );
    });
  },

  updateFood: (id, { name, description, imageURL, price }) => {
    return new Promise((resolve, reject) => {
      const foodData = { name, description, image_url: imageURL, price };
      connection.query(
        "UPDATE foods SET name = ?, description = ?, image_url =?, price = ? WHERE id = ?",
        [name, description, `http://localhost:5000/${imageURL}`, price, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          if (results.affectedRows === 0) {
            return reject(new Error("Food not found"));
          }
          resolve({ id, ...foodData });
        }
      );
    });
  },
};

module.exports = FoodModel;
