const { Schema } = require("mongoose")
const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate(value) {
      const regExp = /\S+@\S+\.\S+/
      return regExp.test(String(value).toLocaleLowerCase())
    },
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: function () {
      return gravatar.url(this.email, { s: 250 }, true)
    },
  },
})

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = userSchema
