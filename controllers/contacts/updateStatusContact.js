const { contact: service } = require("../../services")

const updateStatusContact = async (req, res, next) => {
  const { favorite } = req.body
  const { contactId } = req.params

  try {
    const result = await service.updateStatusContact(contactId, favorite)

    res.status(200).json({
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

module.exports = updateStatusContact
