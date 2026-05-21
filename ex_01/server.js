const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4242;
const MONGO_URI = "mongodb://localhost:27042/piscine_mern";

app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Successfully connected to MongoDB on port 27042");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
}

startServer();
