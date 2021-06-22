const { users: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const current = async (req, res, next) => {
  const { id, email, subscription } = req.user

  return res.status(HttpCode.OK).json({
    status: "success",
    code: HttpCode.OK,
    data: { email, subscription },
  })
}

module.exports = current
