const register = require("./register")
const login = require("./login")
const logout = require("./logout")
const current = require("./current")
const updateUserSubscription = require("./updateUserSubscription")
const updateUserAvatar = require("./updateUserAvatar")
const verification = require("./verification")

module.exports = {
  register,
  login,
  logout,
  current,
  updateUserSubscription,
  updateUserAvatar,
  verification,
}
