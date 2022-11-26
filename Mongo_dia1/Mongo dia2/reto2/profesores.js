const mongoose = require("mongoose");
const AsignaturasSchema = require("./asignaturas")

const ProfesoresSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    grupos:[String]
})
ProfesoresSchema.add({asignaturas:[AsignaturasSchema]})
module.exports = mongoose.model("Profesor", ProfesoresSchema)    