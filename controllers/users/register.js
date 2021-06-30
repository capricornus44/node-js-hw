const jwt = require("jsonwebtoken")
require("dotenv").config()

const crypto = require("crypto")

const { users: service } = require("../../services")
const { HttpCode, sendEmail } = require("../../helpers")

const register = async (req, res, next) => {
  const { email, password, subscription, avatarURL } = req.body

  try {
    const user = await service.findByEmail(email)

    if (user) {
      return res.status(HttpCode.CONFLICT).json({
        status: "error",
        code: HttpCode.CONFLICT,
        message: "Already registered",
      })
    }

    const verificationToken = await crypto.randomBytes(16).toString("hex")

    const newUser = await service.createUser({
      email,
      password,
      subscription,
      avatarURL,
      verification: false,
      verificationToken,
    })

    sendEmail(verificationToken, email)

    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      user: {
        id: newUser.id,
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL: newUser.avatarURL,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
