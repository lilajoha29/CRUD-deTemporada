const mongoose = require("mongoose");

const orderPoundSchema = new mongoose.Schema({
    sum: Number,
    delivery_date: Date,
    clientTd: String
});

module.exports = mongoose.model("orderPound", orderPoundSchema);