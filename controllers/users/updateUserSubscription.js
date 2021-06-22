const { HttpCode } = require("../../helpers")
const { users: service } = require("../../services")

const updateUserSubscription = async (req, res, next) => {
  try {
    const user = req.user
    const id = user.id
    const subscription = req.body.subscription
    const newSubscription = await service.updateUserSubscription(id, subscription)
    const updatedSubscritrion = newSubscription.subscription

    if (!newSubscription) {
      return res.status(HttpCode.BAD_REQEST).json({ message: "Server could not update your subscription" })
    }
    return res.status(HttpCode.OK).json({ user: { email: user.email, subscription: updatedSubscritrion } })
  } catch (error) {
    console.log(error)
  }
}

module.exports = updateUserSubscription
