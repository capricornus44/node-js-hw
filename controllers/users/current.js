const { HttpCode } = require("../../helpers")

const current = async (req, res, next) => {
  const { email, subscription } = req.user

  return res.status(HttpCode.OK).json({
    status: "success",
    code: HttpCode.OK,
    data: { email, subscription },
  })
}

module.exports = current
