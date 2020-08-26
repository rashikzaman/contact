const cloudMongoose = require('../cloudMongoose')
const contactSchema = require('../schema/contactSchema')

const contactModel = (() => {

    const Contact = cloudMongoose.model("Contact", contactSchema)

    const addContact = (contact) => {
        const contact = new Contact({ ...contact })
        try {
            const result = await contact.save()
            return result
        } catch (e) {
            console.log(e.message)
        }
    }

    const getContact = (mobileNumber) => {
        try {
            const result = await Contact.findOne({ mobile_number: mobileNumber })
            return result
        } catch (e) {
            console.log(e.message)
        }
    }

    const getContacts = (option) => {
        try {
            const result = await Contact.find(option)
            return result
        } catch (e) {
            console.log(e.message)
        }
    }

    const editContact = (mobileNumber, contact) => {
        try {
            const result = await Contact.findOneAndUpdate(
                { mobile_number: mobileNumber },
                contact,
                { new: true, upsert: true })

            return result
        } catch (e) {
            console.log(e.message)
        }
    }

    const deleteContact = (mobileNumber) => {
        try {
            await Contact.findOneAndRemove({ mobile_number: mobileNumber })
            return true
        } catch (e) {
            console.log(e.message)
        }
    }

    return {
        addContact: addContact,
        getContact: getContact,
        getContacts: getContacts,
        editContact: editContact,
        deleteContact: deleteContact
    }

})()

module.exports = contactModel