const mongoose = require("mongoose");

const vlogSchema= new mongoose.Schema({
    title:String,
    description:String,
    duration:Number,
    isItAvailable: Boolean
})

const Vlog = mongoose.model('Vlog',vlogSchema);
module.exports = Vlog;