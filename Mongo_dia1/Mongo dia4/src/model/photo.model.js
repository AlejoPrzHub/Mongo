const {Schema,model} = require("mongoose");

const PhotoSchema = new Schema({
    nombreUsuario:String,
    url:String,
    titulo:String,
    descripcion:String,
    
})
module.exports = model("Photo", PhotoSchema)
