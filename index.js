const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const port = process.env.PORT || 7777;

const app = new express();
app.use(express.json());
app.use(cors());

const productRouter = require("./routes/productRouter");
const authRouter = require("./routes/auth");

app.use("/", productRouter);
app.use("/", authRouter);

connectDB()
  .then(() => {
    console.log("DB Connection established");
    app.listen(port, () => {
      console.log("app listen to port");
    });
  })
  .catch((err) => {
    console.log("database connection failed!!");
  });
