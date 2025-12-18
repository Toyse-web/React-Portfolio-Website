const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true, maxlength: 150},
    email: {type: String, required: true, trim: true, maxlength: 280},
    message: {type: String, required: true, maxlength: 2500},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Message", messageSchema);