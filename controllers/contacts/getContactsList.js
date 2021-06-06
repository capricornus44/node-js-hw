const { contactsRequestFunctions: db } = require("../../helpers")

const getContactsList = async (req, res, next) => {
  const contacts = await db.listContacts()
  try {
    res.json({
      status: "success",
      code: 200,
      data: { result: contacts },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContactsList
