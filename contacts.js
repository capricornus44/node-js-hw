const fs = require("fs").promises
const path = require("path")
const { nanoid } = require("nanoid")

const contactsPath = path.join(__dirname, "./db/contacts.json")

// ** Functions to work with contacts collection
async function listContacts() {
  return JSON.parse(await fs.readFile(contactsPath, "utf-8"))
}

async function getContactById(contactId) {
  const list = await listContacts()

  return list.find((el) => el.id === contactId)
}

async function removeContact(contactId) {
  const list = await listContacts()
  const res = list.filter((el) => el.id !== contactId)

  await fs.writeFile(contactsPath, JSON.stringify(res))
}

async function addContact(name, email, phone) {
  const id = nanoid(2)
  const newContact = { id, name, email, phone }
  const list = await listContacts()

  await fs.writeFile(contactsPath, JSON.stringify([...list, newContact]))

  return newContact
}

async function updateContact(contactId, body) {
  const list = await listContacts()
  const contactIndex = list.findIndex((user) => String(user.id) === contactId)

  if (contactIndex === -1) return null
  list[contactIndex] = { ...list[contactIndex], ...body }

  console.log(list[contactIndex])

  await fs.writeFile(contactsPath, JSON.stringify([...list]))

  return list[contactIndex]
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
