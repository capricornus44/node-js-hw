const { Contact } = require("../models")

const getContacts = async (userId, { page = "1", limit = "5", sub }) => {
  const options = { owner: userId }

  if (sub) {
    options.subscription = { $all: [sub] }
  }
  try {
    const results = await Contact.paginate(options, {
      page,
      limit,
      populate: {
        path: "owner",
        select: "email subscription",
      },
    })

    const { docs: contacts, totalDocs: total, page: pageNumber, totalPages: allPages } = results

    return {
      total: total.toString(),
      limit,
      totalPages: allPages.toString(),
      page: pageNumber.toString(),
      contacts,
    }
  } catch (error) {
    console.log(error)
  }
}

const getContact = async (contactId, userId) => {
  try {
    const result = await Contact.findById({
      _id: contactId,
      owner: userId,
    }).populate({
      path: "owner",
      select: "email subscription",
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

const addContact = async (body) => {
  return await Contact.create(body)
}

const updateContact = async (contactId, body, userId) => {
  try {
    const result = await Contact.findByIdAndUpdate(
      { _id: contactId, owner: userId },
      { ...body },
      { new: true }
    ).populate({
      path: "owner",
      select: "email subscription",
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

const removeContact = async (contactId, userId) => {
  try {
    const result = await Contact.findByIdAndDelete({
      _id: contactId,
      owner: userId,
    }).populate({
      path: "owner",
      select: "email subscription",
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getContacts,
  getContact,
  addContact,
  updateContact,
  removeContact,
}
