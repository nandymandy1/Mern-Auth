const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { userAuth, generateToken, serializeUser } = require("./common");

router.get("/", userAuth, async (req, res) => {
  return res.status(200).json(serializeUser(req.user));
});

router.post(
  "/",
  [
    check("username", "Username is required.")
      .not()
      .isEmpty(),
    check("password", "Password is required.").isLength({ min: 6 })
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let { username, password } = req.body;
      // First Check if the username is in the database
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(404).json({
          message: "Username is not found. Invalid login credentials.",
          success: false
        });
      }

      // Now check for the password
      let isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        // Sign in the token and issue it to the user
        let token = generateToken(user);

        let result = {
          username: user.username,
          email: user.email,
          token: `Bearer ${token}`,
          expiresIn: 168
        };

        return res.status(200).json({
          ...result,
          message: "Hurray! You are now logged in.",
          success: true
        });
      } else {
        return res.status(403).json({
          message: "Incorrect password.",
          success: false
        });
      }
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ message: "Server error please try again.", success: false });
    }
  }
);

module.exports = router;
