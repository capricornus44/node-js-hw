const { contactsRequestFunctions: db } = require("../../helpers")

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const valueToUpdate = req.body

  const contact = await db.updateContact(contactId, valueToUpdate)

  try {
    if (contact) {
      return res.json({
        status: "success",
        code: 200,
        data: {
          contact,
        },
      })
    }

    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContact
