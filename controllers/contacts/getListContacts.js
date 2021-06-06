const contacts = require("../../db/contacts.json")

const getListContacts = (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  })
}

module.exports = getListContacts
