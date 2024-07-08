const port=4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database connection with MongoDB
mongoose.connect("mongodb+srv://sanda:TVRS1234%23@cluster0.r6puny8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else
    {
        console.log("Error :"+error)
    }
})


