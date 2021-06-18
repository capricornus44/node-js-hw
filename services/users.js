const User = require("../models")

// Does user with this email already exist? => during register operation
// Does inputted email match with email in db? => during login operation
// User.findOne({email: filter})

const getOne = (filter) => {
  return User.findOne(filter)
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
