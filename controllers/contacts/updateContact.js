// const { contactsRequestFunctions: db } = require("../../helpers")

// const updateContact = async (req, res, next) => {
//   try {
//     const { contactId } = req.params
//     const valueToUpdate = req.body
//     const updatedContact = await db.updateContact(contactId, valueToUpdate)

//     if (!updatedContact) {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         message: "Contact not found",
//       })
//     }

//     res.status(200).json({
//       status: "success",
//       code: 200,
//       data: {
//         updatedContact,
//       },
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// module.exports = updateContact

const { contact: service } = require("../../services")

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  try {
    const result = await service.updateContact(contactId, req.body)
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

module.exports = updateContact
