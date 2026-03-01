const express = require("express");
const connectToDataBase = require("./db/db");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
connectToDataBase();

app.use(express.json());

app.use("/auth", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("I am a marijuana plant");
});
