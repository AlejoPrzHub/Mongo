const {Schema,model} = require("mongoose");

const ProfessionalSchema = new Schema({
    nome:String,
    age:Number,
    weight:String,
    height:String,
    nationality:String,
    profession:String

})
module.exports = model("Professional", ProfessionalSchema)
