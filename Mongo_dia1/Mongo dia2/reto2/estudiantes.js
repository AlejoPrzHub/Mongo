const mongoose = require("mongoose");

const EstudiantesSchema = new mongoose.Schema({
    nombre:String,
    apellido:String
})

module.exports = mongoose.model("Estudiante", EstudiantesSchema)