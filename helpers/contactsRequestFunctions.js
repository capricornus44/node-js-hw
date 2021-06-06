const fs = require("fs").promises

const path = require("path")
const { nanoid } = require("nanoid")

const contactsPath = path.join(__dirname, "../db/contacts.json")

// ** Functions to work with contacts collection
async function listContacts() {
  return JSON.parse(await fs.readFile(contactsPath, "utf-8"))
}

async function getContactById(contactId) {
  try {
    const list = await listContacts()
    return list.find((el) => el.id === contactId)
  } catch (error) {
    console.log(error)
  }
}

async function removeContact(contactId) {
  try {
    const list = await listContacts()
    const res = list.filter((el) => el.id !== contactId)
    await fs.writeFile(contactsPath, JSON.stringify(res))
  } catch (error) {
    console.log(error)
  }
}

async function addContact(name, email, phone) {
  const id = nanoid(2)

  try {
    const list = await listContacts()
    await fs.writeFile(contactsPath, JSON.stringify([...list, { id, name, email, phone }]))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
