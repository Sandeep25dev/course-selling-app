const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

adminRouter.post("/login", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "New Course Created",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
