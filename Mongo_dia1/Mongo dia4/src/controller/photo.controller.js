const photoModel = require("../model/photo.model");
const { request } = require("../routes/app");

function photo(request,response)
{photoModel.find({nombreUsuario:"usuario" + request.query.id})
.then(function(photo)
{
        console.log(photo);
        response.send(photo);
})
.catch(function(error){console.log(error);
    process.exit(-1);});
}



function getPhoto(request,response)
{
    if(request.query.id == null)
    photoModel.find({})
    .then((photo)=>
    {
        console.log(photo);
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error);
        process.exit(-1);
    })
    else
    {
        photoModel.findById(request.query.id)
        .then((photo)=>
        {
            console.log(photo);
            response.send(photo);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
    }  
}


function postPhoto(request,response)
{
    console.log(request.body);

    let nuevaPhoto = new photoModel({   nombreUsuario:request.body.nombreUsuario,
                                        url:request.body.url,
                                        titulo:request.body.titulo,
                                        descripcion:request.body.descripcion})
    nuevaPhoto.save()
    .then((photo)=>
    {
        console.log("Photo creada con exito")
        console.log(photo);
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}


function photoUp(request,response)
{
photoModel.updateOne({titulo:request.body.titulo},{descripcion:request.body.descripcion})
.then(function(photo)
{
        console.log(photo);
        response.send(photo);
})
.catch(function(error){console.log(error);
    process.exit(-1);});
}


function putPhoto(request,response)
{
    console.log(request.body);

    photoModel.findByIdAndUpdate(request.body.id,{  nombreUsuario:request.body.nombreUsuario,
                                                    url:request.body.url,
                                                    titulo:request.body.titulo,
                                                    descripcion:request.body.descripcion})
    .then((photo)=>
    {
        console.log("Photo actualizada con exito")
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function delPhoto(request,response)
{
    console.log(request.body);

    photoModel.deleteOne({"_id": ObjectId(request.body.id)})
    .then((photo)=>
    {
        console.log("Photo eliminada con exito")
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function photoDel(request,response)
{photoModel.deleteOne({nombreUsuario:request.body.nombreUsuario,titulo:request.body.titulo})
.then((photo)=>
    {
        console.log("Photo eliminada con exito")
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error)
    })}


function photoDel2(request,response)
    {photoModel.deleteMany({nombreUsuario:request.body.nombreUsuario})
    .then((photo)=>
    {
        console.log("Photos eliminada con exito")
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error)
    })}


function delPhoto2(request,response)
{
    console.log(request.body);

    photoModel.deleteMany({"_id": ObjectId(request.body.id)})
    .then((photo)=>
    {
        console.log("Photos eliminada con exito")
        response.send(photo);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

module.exports = {getPhoto,postPhoto,putPhoto,delPhoto,delPhoto2,photo,photoUp,photoDel,photoDel2}