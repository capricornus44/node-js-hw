const jwt = require("jsonwebtoken")
require("dotenv").config()

const { users: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await service.findByEmail(email)

    if (!user || !user.validPassword(password)) {
      return res.status(HttpCode.BAD_REQEST).json({
        status: "error",
        code: HttpCode.BAD_REQEST,
        message: "Incorrect email or password",
      })
    }

    const id = user._id
    const payload = { id }
    const { TOKEN_KEY } = process.env
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: "2h" })

    await service.updateToken(id, token)

    res.json({
      status: "success",
      code: HttpCode.OK,
      data: {
        token,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = login
