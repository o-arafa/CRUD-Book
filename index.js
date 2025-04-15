const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());

const url = process.env.MONGO_URI;
mongoose.connect(url)
    .then(()=>console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));