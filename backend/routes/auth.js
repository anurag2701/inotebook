const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using: POST "api/auth/". Doesn't require auth.
router.post(
  "/",
  body("name", "Enter a valid name!").notEmpty().escape(),
  body("password", "Enter a valid password!").notEmpty().isLength({min: 5}),
  body("email", "Enter a valid email!").isEmail(),
  async (req, res) => {
    const result = validationResult(req);
    console.log(result)
    if (result.isEmpty()) {
        const user = new User(req.body);
        await user.save();
        return res.send("user saved!!!");
    }
    res.send({ errors: result.array() });

    console.log(req.body);
  }
);

router.get("/", (req, res) => {
  console.log(req.body);
  obj = {
    name: "anurag",
  };
  res.json(obj);
});

// This is important
module.exports = router;
