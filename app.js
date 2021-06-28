const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const path = require("path")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const { HttpCode } = require("./helpers")
const routes = require("./api")

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json({ limit: 10000 }))
app.use(express.static(path.join(process.cwd(), "public")))

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  handler: (req, res, next) => {
    return res.status(HttpCode.BAD_REQEST).json({ message: "Too many requests, please try again later." })
  },
})

app.use("/api/", apiLimiter)

app.use("/api/v1/users", routes.users)
app.use("/api/v1/contacts", routes.contacts)

app.use((_, res) => {
  res.status(HttpCode.NOT_FOUND).json({
    status: "error",
    code: HttpCode.NOT_FOUND,
    message: "Resource not found",
  })
})

app.use((error, _, res, __) => {
  const code = error.code || HttpCode.INTERNAL_SERVER_ERROR
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
