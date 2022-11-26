const mongoose = require("mongoose");
const EstudiantesSchema = require("./estudiantes")

const NotasSchema = new mongoose.Schema({
    date:Date,
    nota:Number   
})
NotasSchema.add({Estudiantes:[EstudiantesSchema]})
module.exports = mongoose.model("Nota", NotasSchema)