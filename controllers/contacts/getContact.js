const { contacts: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const getContact = async (req, res, next) => {
  const { contactId } = req.params
  const userId = req.user.id

  try {
    const contact = await service.getContact(userId, contactId)

    if (!contact) {
      return res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: "Contact not found",
      })
    }

    res.json({
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

module.exports = getContact
