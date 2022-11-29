const {Schema,model} = require("mongoose");

const PeliculasSchema = new Schema({
    title:String,
    releaseYear:Number,
    genre:String,
    director:[String],
    guionista:[String],
    producer:String,
    actors:[String]

})
module.exports = model("Peliculas", PeliculasSchema)



// {
//     "title": "tarzan",
//     "releaseYear": 1998,
//     "genre": "animacion",
//     "director": [
//       "juan perez",
//       "julio molina"
//     ],
//     "guionista": [
//       "fernando martinez",
//       "jessica gonzales"
//     ],
//     "producer": "la locura tv",
//     "actors": [
//       "patricia",
//       "sofia"
//     ]
//   }