const User = require("../models/User");
const { key } = require("../config");
const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      try {
        let user = await User.findById(payload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return done(null, false);
      }
    })
  );
};
