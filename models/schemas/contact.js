const { Schema, SchemaTypes } = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")

const contactSchema = Schema(
  {
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
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
)

contactSchema.plugin(mongoosePaginate)

module.exports = contactSchema
