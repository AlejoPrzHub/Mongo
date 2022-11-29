const mongoose = require("mongoose");
// const Profesor = require("./profesores");
// const Asignatura = require("./asignaturas");
// const Notas = require("./notas")
// const Estudiante = require("./estudiantes")

mongoose.connect("mongodb+srv://josealeprz:leo11jos15!@cluster0.kiu9w1y.mongodb.net/modelo",
    {useNewUrlParser: false, useUnifiedTopology: false})


    const ProfesoresSchema = new mongoose.Schema({
        nombre:String,
        apellido:String,
        grupos:[String]
    })

    const AsignaturasSchema = new mongoose.Schema({
        titulo:String 
    })

    const NotasSchema = new mongoose.Schema({
        date:Date,
        nota:Number   
    })

    const EstudiantesSchema = new mongoose.Schema({
        nombre:String,
        apellido:String
    })

ProfesoresSchema.add({asignaturas:[AsignaturasSchema]});
AsignaturasSchema.add({nota:NotasSchema});
NotasSchema.add({Estudiantes:[EstudiantesSchema]});

let ProfesorModelo = mongoose.model("Profesor", ProfesoresSchema);
let AsignaturasModelo = mongoose.model("Asignatura", AsignaturasSchema);
let NotasModelo = mongoose.model("Nota", NotasSchema);
let EstudiantesModelo = mongoose.model("Estudiante",EstudiantesSchema);

let estudiante1 = new EstudiantesModelo({nombre:"juan",apellido:"perez"});
let estudiante2 = new EstudiantesModelo({nombre:"juanito",apellido:"lopez"});
let estudiante3 = new EstudiantesModelo({nombre:"juanote",apellido:"jimenez"});
let estudiante4 = new EstudiantesModelo({nombre:"juana",apellido:"guerra"});
let estudiante5 = new EstudiantesModelo({nombre:"juanita",apellido:"ribera"});

let nota1 = new NotasModelo({date:2020-01-01,nota:1,Estudiantes:[estudiante1,estudiante2,estudiante4]});
let nota2 = new NotasModelo({date:2020-02-02,nota:2,Estudiantes:[estudiante5,estudiante2,estudiante3]});
let nota3 = new NotasModelo({date:2020-03-03,nota:3,Estudiantes:[estudiante2,estudiante4,estudiante3]});
let nota4 = new NotasModelo({date:2020-04-04,nota:4,Estudiantes:[estudiante4,estudiante1,estudiante5]});
let nota5 = new NotasModelo({date:2020-05-05,nota:5,Estudiantes:[estudiante5,estudiante2,estudiante3]});

let asignatura1 = new AsignaturasModelo({titulo:"asig1",nota:nota1});
let asignatura2 = new AsignaturasModelo({titulo:"asig2",nota:nota2});
let asignatura3 = new AsignaturasModelo({titulo:"asig3",nota:nota3});
let asignatura4 = new AsignaturasModelo({titulo:"asig4",nota:nota4});
let asignatura5 = new AsignaturasModelo({titulo:"asig5",nota:nota5});

let profesor1 = new ProfesorModelo({nombre:"pepe",apellido:"jimenez",grupos:["1","2"],asignaturas:[asignatura1,asignatura2]});
let profesor2 = new ProfesorModelo({nombre:"pepito",apellido:"gutierrez",grupos:["1","3"],asignaturas:[asignatura3]});
let profesor3 = new ProfesorModelo({nombre:"pepita",apellido:"perez",grupos:["5","3"],asignaturas:[asignatura4,asignatura1]});
let profesor4 = new ProfesorModelo({nombre:"pepon",apellido:"alonso",grupos:["4"],asignaturas:[asignatura5,asignatura2]});
let profesor5 = new ProfesorModelo({nombre:"pepote",apellido:"mercado",grupos:["2","5"],asignaturas:[asignatura3]});


// EstudiantesModelo.insertMany([estudiante1,estudiante2,estudiante3,estudiante4,estudiante5])
// .then(function(){console.log("Documentos creados Correctamete")})
// .catch(function(){console.log("Error al insertar el documento")})

// NotasModelo.insertMany([nota1,nota2,nota3,nota4,nota5])
// .then(function(){console.log("Documentos creados Correctamete")})
// .catch(function(){console.log("Error al insertar el documento")})

// AsignaturasModelo.insertMany([asignatura1,asignatura2,asignatura3,asignatura4,asignatura5])
// .then(function(){console.log("Documentos creados Correctamete")})
// .catch(function(){console.log("Error al insertar el documento")})

// ProfesorModelo.insertMany([profesor1,profesor2,profesor3,profesor4,profesor5])
// .then(function(){console.log("Documentos creados Correctamete")})
// .catch(function(){console.log("Error al insertar el documento")})

// NotasModelo.find({'Estudiantes.nombre': 'juan'},
// function(error,nota)
// {
//     if(error) console.log("Error")
//     else console.log(nota)
// })

AsignaturasModelo.find({'nota.Estudiantes.nombre': 'juan'},
function(error,nota)
{
    if(error) console.log("Error")
    else console.log(nota)
})

ProfesorModelo.find({'asignaturas.nota.Estudiantes.nombre': 'juan'},
function(error,nota)
{
    if(error) console.log("Error")
    else console.log(nota)
})


