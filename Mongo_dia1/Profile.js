const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name:String,
    surname:String,
    dateOfBirth:String,
    Comments:String,
    rol:{
        type:String,
        required:true}
})

module.exports = mongoose.model("Profile", ProfileSchema)