const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
