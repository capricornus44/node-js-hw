const express = require("express")

const { getContactsList, getContact, addNewContact, removeContact, updateContact } = require("../controllers/contacts")

const router = express.Router()

router.get("/", getContactsList)

router.get("/:contactId", getContact)

router.post("/", addNewContact)

router.delete("/:contactId", removeContact)

router.put("/:contactId", updateContact)

module.exports = router
