const express = require("express");
const mongoose = require("mongoose");

const Vlog = require("./models/vlogModel");
const vlogRouter = require("./routes/vlogRouter");

const app = express();
app.use(express.json());

mongoose
 .connect("mongodb://127.0.0.1:27017/vlogdb")
 .then(()=> {
    console.log("connected to database");
 })
 .catch((err) => {
    console.log(err.message);
 });

 app.use("/api/vlogs",vlogRouter);

 app.listen(3050, () => {
    console.log("Server is up and runnning");
 });
 