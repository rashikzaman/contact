const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    mobile_number: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = contactSchema;