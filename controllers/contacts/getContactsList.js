const { contactsRequestFunctions: db } = require("../../helpers")

const getContactsList = async (_, res) =>
  res.json({
    status: "success",
    code: 200,
    data: { result: await db.listContacts() },
  })

module.exports = getContactsList
