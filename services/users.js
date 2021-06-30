const { User } = require("../models")

const createUser = async ({ email, password, subscription, verification, verificationToken }) => {
  const user = new User({ email, subscription, verification, verificationToken })
  user.setPassword(password)
  return await user.save()
}

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

const findUserById = async (userId) => {
  return await User.findById(userId)
}

const findByVerificationToken = async (verificationToken) => {
  return await User.findOne({ verificationToken })
}

const updateToken = async (userId, token) => {
  return await User.findByIdAndUpdate({ _id: userId }, { token })
}

const updateUserSubscription = async (userId, subscription) => {
  const updateSubscription = await User.findByIdAndUpdate({ _id: userId }, { subscription }, { new: true })
  return updateSubscription
}

const updateUserAvatar = async (userId, avatarURL) => {
  return await User.findByIdAndUpdate({ _id: userId }, { avatarURL })
}

const updateVerificationToken = async (userId, verification, verificationToken) => {
  return await User.findByIdAndUpdate({ _id: userId }, { verification, verificationToken })
}

module.exports = {
  createUser,
  findByEmail,
  findUserById,
  findByVerificationToken,
  updateToken,
  updateUserSubscription,
  updateUserAvatar,
  updateVerificationToken,
}
