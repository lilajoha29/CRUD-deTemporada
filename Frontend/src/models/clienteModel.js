const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
    name: String,
    contact: Number,
    address: String,
});

module.exports = mongoose.model("cliente", clienteSchema);