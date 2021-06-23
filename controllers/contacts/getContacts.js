const { contacts: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const getContacts = async (req, res, next) => {
  const { query } = req
  const userId = req.user.id

  try {
    const contacts = await service.getContacts(userId, query)

    if (!contacts) {
      res.status(HttpCode.NOT_FOUND).json("There are no contacts published yet!")
    }

    res.json({
      status: "success",
      code: HttpCode.OK,
      data: {
        contacts,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContacts
