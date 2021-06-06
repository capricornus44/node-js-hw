const contacts = require("../../db/contacts.json")

const updateContact = (req, res, next) => {
  const { contactId } = req.params
  const updateContact = req.body
  const contactIndex = contacts.findIndex(({ id }) => String(id) === contactId)

  if (contactIndex === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Contact not found",
    })
  }

  if (!updateContact.name || !updateContact.email || !updateContact.phone) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "Missing fields",
    })
  }

  contacts[contactIndex] = updateContact
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: updateContact,
    },
  })
}

module.exports = updateContact
