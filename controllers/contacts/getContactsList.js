const { contactsRequestFunctions: db } = require("../../helpers")

const getContactsList = async (_, res) => res.json({ result: await db.listContacts() })

module.exports = getContactsList
