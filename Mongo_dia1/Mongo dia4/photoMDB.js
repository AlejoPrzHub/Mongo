const mongoose = require("mongoose");
const Photo = require("./photo")

mongoose.connect("mongodb+srv://josealeprz:leo11jos15!@cluster0.kiu9w1y.mongodb.net/modelo",
    {useNewUrlParser: false, useUnifiedTopology: false})

let photo1 = new Photo({
            nombreUsuario:"usuario1",
            url:"123456",
            titulo:"la foto",
            descripcion:"increible"})


let photo2 = new Photo({
            nombreUsuario:"usuario2",
            url:"78910",
            titulo:"la foto2",
            descripcion:"fabulosa"})
                                        //CREAR VARIOS
// Photo.insertMany([photo1,photo2])
// .then(function(){console.log("Documentos creados Correctamete")})
// .catch(function(){console.log("Error al insertar el documento")})


                                        //FIND
Photo.find({nombreUsuario:"usuario1"})
.then(function(result)
{
    console.log("Correcto")
    console.log(result)
})
.catch(function(){console.log("Error")});

                                        //UPDATE
Photo.updateOne({nombreUsuario:"usuario2",descripcion:"fabulosa"},{descripcion:"asombroso"})
.then(function(result)
{
    console.log("Correctamente Modificado")
    console.log(result)
})
.catch(function(){console.log("Error")});


                                        //DELETE ONE
Photo.deleteOne({nombreUsuario:"usuario1",titulo:"la foto"})
.then(function(result)
{
    console.log("Correctamente Borrado")
    console.log(result)
})
.catch(function(){console.log("Error")});


                                        //DELETE MANY
Photo.deleteMany({nombreUsuario:"usuario1"})
.then(function(result)
{
    console.log("Correctamente Borrado")
    console.log(result)
})
.catch(function(){console.log("Error")});