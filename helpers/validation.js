const Joi = require("joi")

const createContactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  phone: Joi.string()
    .length(9)
    .pattern(/^[0-9]+$/)
    .required(),
})

const updateContactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).optional(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  phone: Joi.string()
    .length(9)
    .pattern(/^[0-9]+$/)
    .optional(),
}).min(1)

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj)
  if (error) {
    const [{ message }] = error.details
    return next({
      status: 400,
      message: `Field: ${message.replace(/"/g, "")}`,
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
