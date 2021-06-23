const { users: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const logout = async (req, res, next) => {
  const id = req.user.id

  await service.updateToken(id, null)

  return res.status(HttpCode.NO_CONTENT).json({
    status: "success",
    code: HttpCode.NO_CONTENT,
  })
}

module.exports = logout
