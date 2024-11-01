const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { adminMiddleware } = require("../middlewares/admin");

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await adminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    res.json({
      message: "User Signed-Up successfully",
    });
  } catch (err) {
    res.status(403).json({
      message: "error while fetching user data",
    });
  }
});

adminRouter.post("/login", async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await adminModel.findOne({
      email,
    });

    if (!user) {
      res.status(403).json({
        message: "user not found",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_ADMIN_SECRET
      );

      res.json({
        token,
      });
    } else {
      res.status(403).json({
        message: "incorrect credentials",
      });
    }
  } catch (err) {
    res.status(403).json({
      message: "error while finding user",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, imageURL, price } = req.body;
  const course = await courseModel.create({
    title,
    description,
    imageURL,
    price,
    creatorId: adminId,
  });
  res.json({
    message: "New Course Created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, imageURL, price, creatorId } = req.body;

  const updatedCourse = await courseModel.updateOne(
    { _id: creatorId, creatorId: adminId },
    {
      title,
      description,
      imageURL,
      price,
    }
  );

  res.json({
    message: "Course Updated",
    courseId: updatedCourse._id,
  });
});
adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;

  const courses = await courseModel.find({
    creatorId: adminId,
  });

  res.json({
    message: "Here are all your courses",
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
