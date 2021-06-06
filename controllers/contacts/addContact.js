const { contactsRequestFunctions: db } = require("../../helpers")

const addContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    const newContact = await db.addContact(req.body)

    if (!name || !email || !phone) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Missing required name field",
      })
    }

    res.status(201).json({
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

module.exports = addContact
