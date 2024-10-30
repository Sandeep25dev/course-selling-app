const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "Here are all your courses",
  });
});

courseRouter.get("/test", function (req, res) {
  res.send("Hello from the test route");
});

module.exports = {
  courseRouter: courseRouter,
};
