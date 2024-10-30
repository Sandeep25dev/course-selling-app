const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/admin/signup", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

adminRouter.post("/admin/login", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
