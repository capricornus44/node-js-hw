const contacts = require("../../db/contacts.json")

const getContactById = (req, res, next) => {
  const { contactId } = req.params
  const contact = contacts.find(({ id }) => String(id) === contactId)

  if (!contact) {
    return res.status(404).json({
      status: "error",
      code: "404",
      message: "Contact not found",
    })
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  })
}

module.exports = getContactById
