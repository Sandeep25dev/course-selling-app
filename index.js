require("dotenv").config();
const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
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
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(3003, () => {
    console.log("Server is live on port 3003");
  });
}

main();
