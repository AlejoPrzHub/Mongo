const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login:{
            type:String,
            required:true
    },
    password:{
               type:String,
               required:true,
               validate:[
                function(password)
                {
                    return password.length >= 6
                },
                "El password deberia ser mas largo"],
                select:false
    }
})

UserSchema.pre("save",function(next)
{
    console.log("Middleware de entrada");
    if(this.password.length > 5)
    {
        console.log("password correcta")
        next();
    }
    else
    console.log("password incorrecto")
});

module.exports = mongoose.model("User", UserSchema, "User")