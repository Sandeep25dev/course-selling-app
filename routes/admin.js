const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

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

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "New Course Created",
  });
});
adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "New Course Created",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
