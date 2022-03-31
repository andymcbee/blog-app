const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    //  useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

//app.use("/", (req, res) => {
//  console.log("Hey this is the main URL.");
//  //res.send("ok from main route");
//});

app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});