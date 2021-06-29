const jimp = require("jimp")
const path = require("path")
const fs = require("fs/promises")

const { users: service } = require("../../services")

const uploadDir = path.join(process.cwd(), "public", "avatars")

const updateUserAvatar = async (req, res, next) => {
  const id = req.user.id
  const { path: tempPath } = req.file

  try {
    const userAvatar = await jimp.read(tempPath)
    await userAvatar.cover(250, 250).writeAsync(tempPath)

    const uploadFileName = id + path.extname(tempPath)
    await fs.rename(tempPath, path.join(uploadDir, uploadFileName))

    const avatarUrl = await service.updateUserAvatar(id, {
      avatarUrl: "/avatars/" + uploadFileName,
    })

    res.json({
      statsus: "success",
      code: 200,
      data: {
        result: {
          avatar: avatarUrl,
        },
      },
    })
  } catch (error) {
    await fs.unlink(tempPath)
    next(error)
  }
}

module.exports = updateUserAvatar
