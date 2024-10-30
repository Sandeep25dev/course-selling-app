const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

userRouter.post("/login", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
