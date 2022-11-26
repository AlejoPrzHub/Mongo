const mongoose = require("mongoose");
const NotasSchema = require("./notas")

const AsignaturasSchema = new mongoose.Schema({
    titulo:String 
})
AsignaturasSchema.add({notas:NotasSchema})
module.exports = mongoose.model("Asignatura", AsignaturasSchema)