const { contactsRequestFunctions: db } = require("../../helpers")

const getContacts = async (req, res, next) => {
  const contacts = await db.listContacts()
  try {
    res.status(200).json({
      status: "success",
      code: 200,
      data: { result: contacts },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContacts
