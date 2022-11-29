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