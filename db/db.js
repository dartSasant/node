const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_URL = process.env.DB_URL;

const connectToDataBase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(DB_URL);
    console.log("Database is Connected");
  } catch (error) {
    console.log(DB_URL);
    console.log(`Error while connecting database: ${error.message} `);
  }
};

module.exports = connectToDataBase;