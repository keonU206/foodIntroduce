const connection = require("../db/connection");

const restaurantModel = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT id, name, address, cuisine FROM restaurants;  ",
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  },

  findHomeDate: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT id, name, address, cuisine FROM restaurants ORDER BY name DESC LIMIT 5;  ",
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
        "SELECT  name, address, cuisine, latitude, longitude, description FROM restaurants WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          if (results.length === 0) {
            return reject(new Error("restaurant not found"));
          }
          resolve(results[0]);
        }
      );
    });
  },
};

module.exports = restaurantModel;
