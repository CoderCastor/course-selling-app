const express = require("express");

const courceRouter = express.Router();

courceRouter.get("/purchase", (req, res) => {
  res.json({
    message: "all cources endpoint",
  });
});

courceRouter.get("/preview", (req, res) => {
  res.json({
    message: "course preview endpoint",
  });
});

module.exports = {
  courceRouter: courceRouter,
};
