const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/course/my-courses", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

courseRouter.post("/course/purchase", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

courseRouter.get("/course/preview", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
