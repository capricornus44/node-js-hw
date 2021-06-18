const User = require("../models")

const getOne = (filter) => {
  return User.findOne(filter) // User.findOne({email: filter}) => is user with this email already exist?
}

const getById = (id) => {
  return User.findById(id)
}

const add = ({ email, password }) => {
  const newUser = new User({ email })
  newUser.setPassword(password)
  return newUser.save()
}

module.exports = {
  getOne,
  getById,
  add,
}
