const { Contact } = require("../models")

const getContacts = (query) => {
  return Contact.find(query)
}

const getContact = (id) => {
  return Contact.findById(id)
}

const addContact = (body) => {
  return Contact.create(body)
}

const updateContact = (id, body) => {
  return Contact.findByIdAndUpdate(id, body)
}

const updateStatusContact = (id, favorite) => {
  return Contact.findByIdAndUpdate(id, { favorite })
}

const removeContact = (id) => {
  return Contact.findByIdAndDelete(id)
}

const service = {
  getContacts,
  getContact,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
}

module.exports = service
