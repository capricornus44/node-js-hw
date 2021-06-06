const express = require("express")

const { contacts } = require("../controllers")

const router = express.Router()

router.get("/", contacts.getListContacts)

router.get("/:contactId", contacts.getContactById)

router.post("/", contacts.addContact)

router.put("/:contactId", contacts.updateContact)

router.delete("/:contactId", contacts.removeContact)

module.exports = router
