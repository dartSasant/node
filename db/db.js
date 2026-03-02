const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_URL = process.env.DB_URL;

const connectToDataBase = async () => {
  try {
    mongoose.connect(DB_URL);
    console.log(`Connected to database`);
    console.log(DB_URL);
  } catch (err) {
    console.log(`Error while connecting to database: ${err.message}`);
    console.log(DB_URL);
  }
};

module.exports = connectToDataBase;