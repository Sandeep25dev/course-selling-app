const { Router } = require("express");
const courseRouter = Router();
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middlewares/user");

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body;

  await purchaseModel.create({
    userId,
    courseId,
  });

  res.json({
    message: "You have successfully bought a course",
  });
});

courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel.find({});
  res.json({
    message: "Here are all the courses",
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
