const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

const app = new express();
app.use(express.json());
app.use(cors());

const productRouter = require("./routes/productRouter");

app.use("/", productRouter);

connectDB()
  .then(() => {
    console.log("DB Connection established");
    app.listen(7777, () => {
      console.log("app listen to port");
    });
  })
  .catch((err) => {
    console.log("database connection failed!!");
  });
