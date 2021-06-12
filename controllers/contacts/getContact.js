const { contact: service } = require("../../services")

const getContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const result = await service.getContact(contactId)
    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Contact not found",
      })
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContact
