const { contact: service } = require("../../services")

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const result = await service.updateContact(contactId, req.body)

    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Contact not found",
      })
    }

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContact
