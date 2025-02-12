const express = require("express");

const adminRouter = express.Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    mesaage: "Response from admin route",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    mesaage: "Response from admin route",
  });
});

adminRouter.post("/course", (req, res) => {
  res.json({
    mesaage: "Response from admin route",
  });
});

adminRouter.put("/course", (req, res) => {
  res.json({
    mesaage: "Response from admin route",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
