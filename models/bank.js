// Define schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BankSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    id:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: false
    },
});

// Compile model from schema
const BankModel = mongoose.model("banks", BankSchema);

module.exports = BankModel;