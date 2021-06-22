const express = require("express")
const router = express.Router()

const { guard, createAccountLimiter } = require("../helpers")
const { users: ctrl } = require("../controllers")

router.post("/register", createAccountLimiter, ctrl.register)

router.post("/login", ctrl.login)

router.post("/logout", guard, ctrl.logout)

router.get("/current", guard, ctrl.current)

module.exports = router
