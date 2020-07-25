const express = require("express");
const router = express.Router();

//for getting login/landing page
router.get("/", (req, res) => {
  res.render("login");
});
//for getting Dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
