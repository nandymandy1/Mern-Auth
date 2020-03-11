const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { generateToken, validateUsername, validateEmail } = require("./common");

router.post(
  "/register",
  [
    check("name", "Please add a Name.")
      .not()
      .isEmpty(),
    check("username", "Please add a Username.")
      .not()
      .isEmpty(),
    check("email", "Please include a valid Email.").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 })
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { username, email, password } = req.body;

    // validate the username
    let usernameNotTaken = await validateUsername(username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      });
    }

    // validate the email
    let emailNotRegistered = await validateEmail(email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
        success: false
      });
    }

    try {
      password = await bcrypt.hash(password, 12);
      // create a new user
      const newUser = new User({
        ...req.body,
        password
      });
      await newUser.save();
      let token = `Bearer ${generateToken(newUser)}`;
      let result = {
        token,
        username: newUser.username,
        email: newUser.email,
        expiresIn: 168
      };
      return res.status(201).json({
        message: "Hurry! You are logged in.",
        success: true,
        ...result
      });
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ message: "Server error please try again.", success: false });
    }
  }
);

module.exports = router;
