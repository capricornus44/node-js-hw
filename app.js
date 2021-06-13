const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const routes = require("./api")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/contacts", routes.contacts)

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Resource not found",
  })
})

app.use((error, _, res, __) => {
  const code = error.code || 500
  const message = error.message || "Server error"
  res.status(code).json({ message })
})

const { DB_HOST, PORT } = process.env

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(PORT || 3000, () => console.log("Database connection successful")))
  .catch((error) => {
    console.log(`Error in Database connection: ${error.message}`)
    process.exit(1)
  })

process.on("SIGINT", () =>
  mongoose.connection.close(() => {
    console.log("Database disconnected, server terminated.")
    process.exit(1)
  })
)
