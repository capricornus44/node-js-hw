const { nanoid } = require("nanoid")
const contacts = require("../../db/contacts.json")

const addContact = (req, res, next) => {
  const newContact = req.body

  if (!newContact.name || !newContact.email || !newContact.phone) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "Missing required name field",
    })
  }

  newContact.id = nanoid(2)

  try {
    contacts.push(newContact)
    res.json({
      status: "success",
      code: 201,
      data: {
        result: newContact,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
