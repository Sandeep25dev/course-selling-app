const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.use("/api/v1/user", userRouter);

app.use("/api/v1/course", courseRouter);

app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://sandeepkumar250903:sandip10@cluster0.ptlwf.mongodb.net/course-selling-app-db"
  );
  app.listen(3003, () => {
    console.log("Server is live on port 3003");
  });
}

main();
