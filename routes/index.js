const express = require("express");
const router = express.Router();

//for getting login/landing page
router.get("/", (req, res) => {
  res.send("Login");
});
//for getting Dashboard
router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;
