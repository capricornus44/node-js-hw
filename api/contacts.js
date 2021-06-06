const express = require("express")

const { getContactsList, getContactById, addContact, removeContact, updateContact } = require("../controllers/contacts")

const router = express.Router()

router.get("/", getContactsList)

// router.get("/:contactId", contacts.getContactById)

// router.post("/", contacts.addContact)

// router.put("/:contactId", contacts.updateContact)

// router.delete("/:contactId", contacts.removeContact)

module.exports = router
