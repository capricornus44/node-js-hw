const { contacts: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const updateStatusContact = async (req, res, next) => {
  const { favorite } = req.body
  const { contactId } = req.params
  const userId = req.user.id

  try {
    const contact = await service.updateStatusContact(userId, contactId, favorite)

    res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      data: {
        contact,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateStatusContact
