const jwt = require("jsonwebtoken")
require("dotenv").config()

const { users: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const register = async (req, res, next) => {
  const { email, password, subscription } = req.body

  try {
    const user = await service.findByEmail(email)

    if (user) {
      return res.status(HttpCode.CONFLICT).json({
        status: "error",
        code: HttpCode.CONFLICT,
        message: "Already registered",
      })
    }

    const newUser = await service.createUser({ email, password, subscription })
    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      user: {
        id: newUser.id,
        email: newUser.email,
        subscription: newUser.subscription,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
