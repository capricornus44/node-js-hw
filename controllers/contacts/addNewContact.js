const { contactsRequestFunctions: db } = require("../../helpers")

const addNewContact = async (req, res, next) => {
  const newContact = await db.addContact(req.body)

  try {
    return res.status(201).json({
      status: "success",
      code: 201,
      data: {
        newContact,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addNewContact
