const { users: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const logout = async (req, res, next) => {
  const id = req.user.id

  const user = await service.findUserById(id)

  if (!user) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      status: "error",
      code: HttpCode.UNAUTHORIZED,
      message: "Not authorized",
    })
  }

  await service.updateToken(id, null)

  return res.status(HttpCode.NO_CONTENT).json({
    status: "success",
    code: HttpCode.NO_CONTENT,
  })
}

module.exports = logout
