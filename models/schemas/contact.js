const { Schema } = require("mongoose")

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

module.exports = authorSchema
