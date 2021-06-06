const express = require("express")

const { getContactsList, getContact, addNewContact, removeContact, updateContact } = require("../controllers/contacts")

const router = express.Router()

router.get("/", getContactsList)

router.get("/:contactId", getContact)

router.post("/", addNewContact)

// router.put("/:contactId", contacts.updateContact)

// router.delete("/:contactId", contacts.removeContact)

module.exports = router
