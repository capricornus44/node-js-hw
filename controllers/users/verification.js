const { users: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const verification = async (req, res, next) => {
  const { verificationToken } = req.params

  try {
    const user = await service.findByVerificationToken(verificationToken)

    if (!user) {
      return res.status(HttpCode.NOT_FOUND).json({ message: "User not found" })
    }

    await service.updateVerificationToken(user.id, true, null)
    return res.status(HttpCode.OK).json({ message: "Verification is successful" })
  } catch (error) {
    next(error)
  }
}

module.exports = verification
