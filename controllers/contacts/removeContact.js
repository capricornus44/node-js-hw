// const { contactsRequestFunctions: db } = require("../../helpers")

// const removeContact = async (req, res, next) => {
//   try {
//     const { contactId } = req.params
//     const contact = await db.removeContact(contactId)

//     if (!contact) {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         message: "Contact not found",
//       })
//     }

//     res.status(200).json({
//       status: "success",
//       code: 200,
//       message: "Contact deleted",
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// module.exports = removeContact

const { contact: service } = require("../../services")

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const result = await service.removeContact(contactId)
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

module.exports = removeContact
