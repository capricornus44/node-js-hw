const express = require("express")

const { validation } = require("../helpers")
const { getContacts, getContact, addContact, removeContact, updateContact } = require("../controllers/contacts")

const router = express.Router()

router.get("/", getContacts)

router.get("/:contactId", getContact)

router.post("/", validation.createContact, addContact)

router.delete("/:contactId", removeContact)

router.put("/:contactId", validation.changeContact, updateContact)

module.exports = router
