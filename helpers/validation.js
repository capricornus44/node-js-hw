const Joi = require("joi")
const HttpCode = require("./constants")

const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua", "ru", "uk", "net", "org"] },
    })
    .required(),

  phone: Joi.string().min(7).max(15).required(),

  owner: Joi.object().optional(),
})

const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).optional(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua", "ru", "uk", "net", "org"] },
    })
    .optional(),

  phone: Joi.string().min(7).max(15).optional(),

  owner: Joi.object().optional(),
})

const validate = (schema, body, next) => {
  const { error } = schema.validate(body)
  if (error) {
    const [{ message }] = error.details
    return next({
      status: HttpCode.BAD_REQUEST,
      message: `Field: ${message.replace(/"/g, "")}`,
      data: "Bad Request",
    })
  }
  next()
}

createContact = (req, _res, next) => {
  return validate(createContactSchema, req.body, next)
}

changeContact = (req, _res, next) => {
  return validate(updateContactSchema, req.body, next)
}

module.exports = {
  createContact,
  changeContact,
}
