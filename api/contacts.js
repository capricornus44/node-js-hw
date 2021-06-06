const express = require("express")

const { getContactsList, getContact, addContact, removeContact, updateContact } = require("../controllers/contacts")

const router = express.Router()

router.get("/", getContactsList)

router.get("/:contactId", getContact)

// router.post("/", contacts.addContact)

// router.put("/:contactId", contacts.updateContact)

// router.delete("/:contactId", contacts.removeContact)

module.exports = router
