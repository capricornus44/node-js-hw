const express = require("express")

const { contacts: ctrl } = require("../controllers/")

const router = express.Router()

router.get("/", ctrl.getContacts)

router.get("/:contactId", ctrl.getContact)

router.post("/", ctrl.addContact)

router.put("/:contactId", ctrl.updateContact)

router.patch("/:contactId/favorite", ctrl.updateStatusContact)

router.delete("/:contactId", ctrl.removeContact)

module.exports = router
