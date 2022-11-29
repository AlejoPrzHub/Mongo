const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://josealeprz:leo11jos15!@cluster0.kiu9w1y.mongodb.net/modelo",
    {useNewUrlParser: false, useUnifiedTopology: false})

    const TeacherShema = new mongoose.Schema({
        nombreProfe:String,
        apellidoProfe:String
    })

const MarksShema = new mongoose.Schema({
    fecha:Date,
    nota:Number,
    NombreEstudiante:String,
    ApellidoEstudiante:String,
    nombreGrupo:String,
    nombreAsignatura:String,
    profesores:[TeacherShema]
})


let MarksModel = mongoose.model("Marks",MarksShema);
let TeachersModel = mongoose.model("Teacher",TeacherShema);

let prof1 =new TeachersModel({
    nombreProfe:"Pedro",
    apellidoProfe:"gonzales"
})
let prof2 =new TeachersModel({
    nombreProfe:"Pablo",
    apellidoProfe:"Perez"
})

let nota1 = new MarksModel({fecha:2020-10-10,
                            nota:10,
                            NombreEstudiante:"juan",
                            ApellidoEstudiante:"jimenez",
                            nombreGrupo:"5toB",
                            nombreAsignatura:"Calculo",
                            profesores:[prof1,prof2]
                        })
                                //RETO1.1
// MarksModel
// .aggregate([{$match:{"nombreAsignatura":'aritmetica'}}
//             ,{$group:{"_id":null,
//             "NOTA MEDIA":{"$avg":"$nota"}}}  
//         ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO 1.2
// MarksModel
// .aggregate([{$count:"nombreEstudiante"}   
//         ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO1.3

// MarksModel
// .aggregate([{$group: 
//             {"_id":{"Nombre":"$NombreEstudiante","Apellido":"$ApellidoEstudiante"}}
//           }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO1.4
// MarksModel
// .aggregate([{$group: 
//             {"_id":{"Nombre":"$profesores.nombreProfe","Apellido":"$profesores.apellidoProfe"}}
//           }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RESTO1.5

// MarksModel
// .aggregate([{$group:{_id:"$nombreGrupo","total": {"$sum":1}},
//                 $sort:{"total":-1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO1.6

// MarksModel
// .aggregate([{$group:{"_id":"$nombreAsignatura",
//             "notamed":{"$avg":"$nota"}}},
//             {$match:{"notamed":{$gt:5}}},
//             {$limit:5}
        
//         ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO 1.7

// MarksModel
// .aggregate([{$group:{_id:{asignatura:"$nombreAsignatura","total": {"$sum":1}}}}
// ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})


///////////////////// RETO 2 ///////////////////////////

// MarksModel.
// aggregate([{$project:{  nombre:"$NombreEstudiante",
//                         apellido:"$ApellidoEstudiante",
//                         "notas":"$nota",
//                         _id:0}},
//             {$match:{$or:[{"notas":{$gt:8}},{"fecha":{"$lt": new Date(2021,11,24)}}]}
// }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO 2.2

// MarksModel.
// aggregate([{$project:{_id:"$nombreAsignatura",fecha:"$fecha",notas:{$avg:"$nota"}}},
//             {$match:{fecha:{"$gt": new Date(2020,11,24)}}}
// ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO 2.3

// MarksModel.
// aggregate([{$project:{_id:"$NombreEstudiante",fecha:"$fecha",notas:{$avg:"$nota"}}},
//             {$match:{fecha:{"$gt": new Date(2020,11,24)}}}
// ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})

                                //RETO 2.4
// MarksModel
// .aggregate([{$project:{_id:"$NombreEstudiante","asignaturas": {"$sum":1},profe:"$profesores.nombreProfe"}},
//             {$match:{profe:"Pedro"}}
//             ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error)=>
// {console.log(error)})