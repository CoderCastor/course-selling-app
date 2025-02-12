const express = require("express");

const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "Signup endpoint",
  });
});
userRouter.post("/signin", (req, res) => {
  res.json({
    message: "Signin endpoint",
  });
});
userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
