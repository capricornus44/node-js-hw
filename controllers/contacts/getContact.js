const { contactsRequestFunctions: db } = require("../../helpers")

const getContact = async (req, res, next) => {
  const contact = await db.getContactById(req.params.contactId)

  try {
    if (!contact) {
      return res.status(404).json({
        status: "error",
        code: "404",
        message: "Contact not found",
      })
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: { result: contact },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContact
