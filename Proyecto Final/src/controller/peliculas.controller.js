const PeliculasModel = require("../model/peliculas.model")

function getPeliculas(request,response)
{
    if(request.query.id == null)
    PeliculasModel.find({})
    .then((Peliculas)=>
    {
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error);
        process.exit(-1);
    })
    else
    {
        PeliculasModel.findById(request.query.id)
        .then((Peliculas)=>
        {
            console.log(Peliculas);
            response.send(Peliculas);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
    }  
}

function getActor_Peliculas(request,response)
{
        PeliculasModel.aggregate([{$group:{_id:request.query.id,"actores":"$actors"}}])
        .then((Peliculas)=>
        {
            console.log(Peliculas);
            response.send(Peliculas);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
}

function getDirector_Peliculas(request,response)
{
        PeliculasModel.aggregate([{$group:{_id:request.query.id,"directores":"$director"}}])
        .then((Peliculas)=>
        {
            console.log(Peliculas);
            response.send(Peliculas);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
}

function getGuionista_Peliculas(request,response)
{
        PeliculasModel.aggregate([{$group:{_id:request.query.id,"guionista":"$guionista"}}])
        .then((Peliculas)=>
        {
            console.log(Peliculas);
            response.send(Peliculas);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
}

function getProductora_Peliculas(request,response)
{
        PeliculasModel.aggregate([{$group:{_id:request.query.id,"productor":"$producer"}}])
        .then((Peliculas)=>
        {
            console.log(Peliculas);
            response.send(Peliculas);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
}

function postPeliculas(request,response)
{
    console.log(request.body);

    let nuevaPelicula = new PeliculasModel({    title:request.body.title,
                                                releaseYear:request.body.releaseYear,
                                                genre:request.body.genre,
                                                director:request.body.director,
                                                guionista:request.body.guionista,
                                                producer:request.body.producer,
                                                actors:request.body.actors})
    nuevaPelicula.save()
    .then((Peliculas)=>
    {
        console.log("Pelicula creada con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function postActor_Peliculas(request,response)
{
    console.log(request.body);


    PeliculasModel.updateOne({_id:request.body._id},
                                    {$push:{actors:request.body.actors}})
    .then((Peliculas)=>
    {
        console.log("Actor actualizado con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function postDirector_Peliculas(request,response)
{
    console.log(request.body);


    PeliculasModel.updateOne({_id:request.body._id},
                                    {$push:{director:request.body.director}})
    .then((Peliculas)=>
    {
        console.log("Director actualizado con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function postGuionista_Peliculas(request,response)
{
    console.log(request.body);


    PeliculasModel.updateOne({_id:request.body._id},
                                    {$push:{guionista:request.body.guionista}})
    .then((Peliculas)=>
    {
        console.log("Guionista actualizado con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function putPeliculas(request,response)
{
    console.log(request.body);

    PeliculasModel.findByIdAndUpdate(request.body._id,{ title:request.body.title,
                                                        releaseYear:request.body.releaseYear,
                                                        genre:request.body.genre,
                                                        director:request.body.director,
                                                        guionista:request.body.guionista,
                                                        producer:request.body.producer,
                                                        actors:request.body.actors})
    .then((Peliculas)=>
    {
        console.log("Peliculas actualizado con exito")
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function delPeliculas(request,response)
{
    console.log(request.body);

    PeliculasModel.deleteOne({"_id":request.body._id})
    .then((Peliculas)=>
    {
        console.log("Peliculas eliminado con exito")
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function delActor_Peliculas(request,response)
{
    console.log(request.body);


    PeliculasModel.updateOne({_id:request.body._id},
                                    {$pop:{actors:1}})
    .then((Peliculas)=>
    {
        console.log("Actor eliminado con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function delDirector_Peliculas(request,response)
{
    console.log(request.body);


    PeliculasModel.updateOne({_id:request.body._id},
                                    {$pop:{director:1}})
    .then((Peliculas)=>
    {
        console.log("Director eliminado con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function delGuionista_Peliculas(request,response)
{
    console.log(request.body);


    PeliculasModel.updateOne({_id:request.body._id},
                                    {$pop:{guionista:1}})
    .then((Peliculas)=>
    {
        console.log("Guionista eliminado con exito")
        console.log(Peliculas);
        response.send(Peliculas);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

module.exports = {getPeliculas,getActor_Peliculas,getDirector_Peliculas,getGuionista_Peliculas,getProductora_Peliculas,postPeliculas,postActor_Peliculas,postDirector_Peliculas,postGuionista_Peliculas,putPeliculas,delPeliculas,delActor_Peliculas,delDirector_Peliculas,delGuionista_Peliculas};