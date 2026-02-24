const express = require("express");
const connectToDataBase = require("./db/db");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
connectToDataBase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req,res) => {
    res.send("I am a marijuana plant")
});



// const express = require("express");
// const dns = require("node:dns");
// const dotenv = require("dotenv");
// const connectDB = require("./db/db");
// dotenv.config();

// dns.setServers(["1.1.1.1"]);

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => res.send("Hello World"));

// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(Server running on port ${PORT}));