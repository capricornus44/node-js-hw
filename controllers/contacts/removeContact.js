const { contacts: service } = require("../../services")
const { HttpCode } = require("../../helpers")

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const userId = req.user.id

  try {
    const contact = await service.removeContact(userId, contactId)

    if (!contact) {
      return res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: "Contact not found",
      })
    }

    res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      message: `Contact ${contact.name} deleted`,
      data: {
        contact,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = removeContact
