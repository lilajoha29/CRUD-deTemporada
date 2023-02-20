const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: Number,
    address: String,
});

module.exports = mongoose.model("clients", clientSchema);