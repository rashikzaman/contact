
const { BadRequest, GeneralError, NotFound } = require('../customException')
const contactModel = require('../model/contactModel')


const contactController = (() => {

    const { addContact, getContact, getContacts, editContact, deleteContact } = contactModel

    const add = async (data) => {
        validateInput(data)
        try {
            const result = await addContact({ name: data.name, mobile_number: data.mobile_number })
            return result
        } catch (e) {
            throw new GeneralError(e.message)
        }
    }

    const get = async (mobileNumber) => {
        try {
            const result = await getContact(mobileNumber)
            if (!result)
                throw new NotFound("contact not found!")
            return result
        } catch (e) {
            throw new GeneralError(e.message)
        }
    }

    const getAll = async () => {
        try {
            const result = await getContacts({})
            return result
        } catch (e) {
            throw new GeneralError(e.message)
        }
    }

    const edit = async (mobileNumber, data) => {
        validateInput(data)
        try {
            const result = await editContact(mobileNumber, data)
            return result
        } catch (e) {
            throw new GeneralError(e.message)
        }
    }

    const remove = async (mobileNumber) => {
        try {
            const result = await deleteContact(mobileNumber)
            return result
        } catch (e) {
            throw new GeneralError(e.message)
        }
    }

    const validateInput = (data) => {
        if (!data.name || !data.mobile_number)
            throw new BadRequest("Input field is missing: name or mobile_number")
    }

    return {
        add: add,
        get: get,
        getAll: getAll,
        remove: remove,
        edit: edit
    }
})()

module.exports = contactController