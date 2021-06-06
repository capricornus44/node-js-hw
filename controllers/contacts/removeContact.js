const contacts = require("../../db/contacts.json")

const removeContact = (req, res, next) => {
  const { contactId } = req.params
  const contactIndex = contacts.findIndex(({ id }) => String(id) === contactId)
  console.log(contactIndex)

  if (contactIndex === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Contact not found",
    })
  }
  contacts.slice(contactIndex, 1)
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Contact deleted",
  })
}

module.exports = removeContact
