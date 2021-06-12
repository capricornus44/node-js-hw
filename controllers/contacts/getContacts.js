const { contact: service } = require("../../services")

const getContacts = async (req, res, next) => {
  const { query } = req

  try {
    const result = await service.getContacts(query)

    if (!result) {
      res.status(404).json("There are no contacts published yet!")
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

module.exports = getContacts
