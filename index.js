const dotenv = require("dotenv");
const express = require("express");
const connectToDataBase = require("./db/db");

dotenv.config();
const PORT = process.env.PORT;

// create app
const app = express();

// add middleware
app.use(express.json());

// connect to database
connectToDataBase();

// add route
app.use("/auth", require("./routes/userRoute"));


// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
