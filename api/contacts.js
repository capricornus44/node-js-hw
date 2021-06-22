const express = require("express")

const { contacts: ctrl } = require("../controllers")
const { validation, guard } = require("../helpers")

const router = express.Router()

router.get("/", guard, ctrl.getContacts)

router.get("/:contactId", guard, ctrl.getContact)

router.post("/", guard, validation.createContact, ctrl.addContact)

router.put("/:contactId", guard, validation.changeContact, ctrl.updateContact)

router.patch("/:contactId/favorite", guard, ctrl.updateStatusContact)

router.delete("/:contactId", guard, ctrl.removeContact)

module.exports = router
