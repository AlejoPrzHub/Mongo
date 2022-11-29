const {Schema,model} = require("mongoose");

const PeliculasSchema = new Schema({
    title:String,
    releaseYear:Number,
    genre:String,
    director:{String},
    guionista:{String},
    producer:String,
    actors:{String}

})
module.exports = model("Peliculas", PeliculasSchema)



// {
//     "title":"frozen",
//     "releaseYear":2020,
//     "genre":"animacion",
//     "director":{"director1":"pedro perez","director2":"juan molina"},
//     "guionista":{"guionista1":"julio martinez", "guionista2":"jose gonzales"},
//     "producer":"locos tv",
//     "actors":{"actor1":"julieta","actor2":"lucia"}
//     }