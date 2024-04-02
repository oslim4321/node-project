require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./src/route/product");
const cors = require("cors");
const app = express();
const ImageUploadRoute = require("./src/route/imageeUpload");

app.use(cors());
app.use("/api/v1/products", productRoute);
app.use("/api/v1/images", ImageUploadRoute);

const port = 4000;

async function start() {
  console.log("node js");

  try {
    const res = await mongoose.connect(process.env.mongoConnect);
    console.log("connected to dd");
    app.listen(port, "localhost", () => {
      console.log("app is listening on port ", port);
    });
  } catch (error) {}
}

start();
