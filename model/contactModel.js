const cloudMongoose = require('../cloudMongoose')
const contactSchema = require('../schema/contactSchema')

const contactModel = (() => {

    const Contact = cloudMongoose.model("Contact", contactSchema)

    const addContact = async (data) => {
        const contact = new Contact({ ...data })
        const result = await contact.save()
        return result
    }

    const getContact = async (mobileNumber) => {

        const result = await Contact.findOne({ mobile_number: mobileNumber })
        return result
    }

    const getContacts = async (option) => {

        const result = await Contact.find(option)
        return result

    }

    const editContact = async (mobileNumber, contact) => {

        const result = await Contact.findOneAndUpdate(
            { mobile_number: mobileNumber },
            contact,
            {
                new: true,               
                upsert: true            //will create new contact if not found 
            })

        return result

    }

    const deleteContact = async (mobileNumber) => {
        await Contact.findOneAndRemove({ mobile_number: mobileNumber })
        return true
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