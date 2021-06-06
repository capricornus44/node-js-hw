const fs = require("fs").promises

const path = require("path")
const { nanoid } = require("nanoid")

const contactsPath = path.join(__dirname, "../db/contacts.json")

// ** Functions to work with contacts collection
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    throw error
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts()
    const contact = contacts.find(({ id }) => String(id) === contactId)

    return contact
  } catch (error) {
    throw error
  }
}

async function removeContact(contactId) {
  try {
    const deletedContact = getContactById(contactId)
    if (!deletedContact) return

    const contacts = await listContacts()
    const res = contacts.filter(({ id }) => String(id) !== contactId)
    await fs.writeFile(contactsPath, JSON.stringify(res))

    return deletedContact
  } catch (error) {
    throw error
  }
}

async function addContact({ name, email, phone }) {
  const id = nanoid(2)

  try {
    const contacts = await listContacts()
    const newContact = { id, ...{ name, email, phone } }

    await fs.writeFile(contactsPath, JSON.stringify([...contacts, newContact]))

    return newContact
  } catch (error) {
    throw error
  }
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts()
    const contactIndex = contacts.findIndex(({ id }) => String(id) === contactId)

    if (contactIndex === -1) return null

    contacts[contactIndex] = { ...contacts[contactIndex], ...body }

    await fs.writeFile(contactsPath, JSON.stringify([...contacts]))

    return contacts[contactIndex]
  } catch (error) {
    throw error
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
