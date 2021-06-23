const { User } = require("../models")

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

const findUserById = async (userId) => {
  return await User.findById(userId)
}

const createUser = async ({ email, password, subscription }) => {
  const user = new User({ email, subscription })
  user.setPassword(password)
  return await user.save()
}

const updateToken = async (userId, token) => {
  return await User.findByIdAndUpdate(userId, { token })
}

const updateUserSubscription = async (userId, subscription) => {
  const updateSubscription = await User.findByIdAndUpdate({ _id: userId }, { subscription }, { new: true })
  return updateSubscription
}

module.exports = {
  findByEmail,
  findUserById,
  createUser,
  updateToken,
  updateUserSubscription,
}
