const { Schema } = require("mongoose")

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, "Missing required name field"],
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Missing required email field"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Missing required phone field"],
    unique: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

module.exports = contactSchema
