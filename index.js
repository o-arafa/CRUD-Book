const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

const url = process.env.MONGO_URI;
mongoose.connect(url).then(()=>{
    console.log("mongoose server started");
})

app.listen(5000, () => console.log("Server running on port 5000"));