const passport = require("passport")
require("../configs/passport.config")
const HttpCode = require("./constants")

const guard = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    const [, token] = req.get("Authorization").split(" ")
    if (err || !user || token !== user.token) {
      return next({
        status: HttpCode.UNAUTHORIZED,
        message: "Not authorized",
      })
    }
    req.user = user
    return next()
  })(req, res, next)
}

module.exports = guard
