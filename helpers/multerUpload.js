const path = require("path")
const multer = require("multer")

const tempdDir = path.join(process.cwd(), "temp")

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, tempdDir),
  filename: (req, file, cb) => cb(null, file.originalname),
})

const upload = multer({
  storage,
  limits: { fileSize: 5000000 },
})

module.exports = upload
