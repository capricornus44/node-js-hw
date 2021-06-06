const express = require("express")
// const logger = require("morgan")
const cors = require("cors")

const api = require("./api")

const app = express()

// app.use(logger())
app.use(cors())
app.use(express.json())

app.use("/api/v1/contacts", api.contacts)

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Resource not found",
  })
})

app.use((error, req, res, next) => {
  const { code = 500, message = "Server error" } = error
  res.status(code).json({ message })
})

app.listen(3000)
