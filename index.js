const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.use("/user", userRouter);

app.use("/course", courseRouter);

app.use("/admin", adminRouter);

app.listen(3003, () => {
  console.log("Server is live on port 3003");
});
