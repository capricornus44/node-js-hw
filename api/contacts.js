const express = require("express")

// const { validation } = require("../helpers")
const { contacts: ctrl } = require("../controllers/")

const router = express.Router()

router.get("/", ctrl.getContacts)

router.get("/:contactId", ctrl.getContact)

router.post("/", ctrl.addContact)

// router.delete("/:contactId", ctrl.removeContact)

// router.put("/:contactId", validation.changeContact, ctrl.updateContact)

module.exports = router
