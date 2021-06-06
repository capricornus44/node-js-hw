const { contactsRequestFunctions: db } = require("../../helpers")

const removeContact = async (req, res, next) => {
  const contact = await db.removeContact(req.params.contactId)

  try {
    if (contact) {
      return res.status(200).json({
        status: "success",
        code: 200,
        message: "Contact deleted",
      })
    }

    res.status(404).json({
      status: "error",
      code: 404,
      message: "Contact not found",
    })
  } catch (error) {
    next(error)
  }
}

module.exports = removeContact
