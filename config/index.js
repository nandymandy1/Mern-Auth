require("dotenv").config();

module.exports = {
  db: process.env.DB,
  PORT: process.env.PORT,
  key: process.env.SECRET
};
