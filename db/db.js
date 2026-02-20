const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(process.env.DB_URL);
    console.log("Database is Connected");
  } catch (error) {
    console.log(process.env.DB_URL);
    console.log(`Error while connecting database: ${error.message} `);
  }
};

module.exports = connectToDataBase;
