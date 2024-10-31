const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
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

userRouter.post("/login", async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.find({
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
        process.env.JWT_USER_SECRET
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

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "User Sign-up endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
