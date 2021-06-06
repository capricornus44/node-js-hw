const fs = require("fs").promises

const path = require("path")
const { nanoid } = require("nanoid")

const contactsPath = path.join(__dirname, "../db/contacts.json")

// ** Functions to work with contacts collection
async function listContacts() {
  try {
    return JSON.parse(await fs.readFile(contactsPath, "utf-8"))
  } catch (error) {
    throw error
  }
}

async function getContactById(contactId) {
  try {
    const list = await listContacts()
    return list.find(({ id }) => String(id) === contactId)
  } catch (error) {
    throw error
  }
}

async function removeContact(contactId) {
  try {
    const list = await listContacts()
    const res = list.filter((el) => el.id !== contactId)
    await fs.writeFile(contactsPath, JSON.stringify(res))
  } catch (error) {
    throw error
  }
}

async function addContact(body) {
  const id = nanoid(2)

  try {
    const list = await listContacts()
    const newContact = { id, ...body }
    await fs.writeFile(contactsPath, JSON.stringify([...list, newContact]))

    return newContact
  } catch (error) {
    throw error
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
