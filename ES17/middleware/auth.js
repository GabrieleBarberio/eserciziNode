const passport = require("passport");

const auth = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({ msg: "Not authorized" });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};

module.exports = auth;
