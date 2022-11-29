const express= require("express")
const cors = require("cors")
const photoRoutes = require("../routes/photo.routes")
const errorHandling = require ("../error/error.Handling")

const app = express();

app.set("port", process.env.PORT|| 3000)
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(photoRoutes);
app.use (function(req, res, next)
        {
            res.status(404).json
                        ({
                            error:true,
                            codigo: 404,
                            message:"Upss, algo no va bien"
                        })
        })
app.use(errorHandling);

module.exports = app;