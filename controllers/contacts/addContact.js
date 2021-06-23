const { contacts: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const addContact = async (req, res, next) => {
  const userId = req.user.id

  try {
    const contact = await service.addContact({ owner: userId, ...req.body })

    res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      data: {
        contact,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
