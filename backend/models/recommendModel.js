const connection = require("../db/connection");

const recommendModel = {
  findRandom: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM foods ORDER BY RAND() LIMIT 1;  ",
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  },
};

module.exports = recommendModel;
