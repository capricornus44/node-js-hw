const express = require("express")

const { getContacts, getContact, addContact, removeContact, updateContact } = require("../controllers/contacts")

const router = express.Router()

router.get("/", getContacts)

router.get("/:contactId", getContact)

router.post("/", addContact)

router.delete("/:contactId", removeContact)

router.put("/:contactId", updateContact)

module.exports = router
