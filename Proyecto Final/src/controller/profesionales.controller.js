const ProfessionalModel = require("../model/profesionales.model")

function getProfessional(request,response)
{
    if(request.query.id == null)
    ProfessionalModel.find({})
    .then((profesional)=>
    {
        console.log(profesional);
        response.send(profesional);
    })
    .catch((error)=>
    {
        console.log(error);
        process.exit(-1);
    })
    else
    {
        ProfessionalModel.findById(request.query.id)
        .then((profesional)=>
        {
            console.log(profesional);
            response.send(profesional);
        })
        .catch((error)=>
        {
            console.log(error);
            process.exit(-1);
        })
    }  
}

function postProfessional(request,response)
{
    console.log(request.body);

    let newProfessional = new ProfessionalModel({   nome:request.body.nome,
                                                    age:request.body.age,
                                                    weight:request.body.weight,
                                                    height:request.body.height,
                                                    nationality:request.body.nationality,
                                                    profession:request.body.profession})
    newProfessional.save()
    .then((Professional)=>
    {
        console.log("Professional creado con exito")
        console.log(Professional);
        response.send(Professional);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function putProfessional(request,response)
{
    console.log(request.body);

    ProfessionalModel.findByIdAndUpdate(request.body.id,{   nome:request.body.nome,
                                                            age:request.body.age,
                                                            weight:request.body.weight,
                                                            height:request.body.height,
                                                            nationality:request.body.nationality,
                                                            profession:request.body.profession})
    .then((Professional)=>
    {
        console.log("Professional actualizado con exito")
        response.send(Professional);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

function delProfessional(request,response)
{
    console.log(request.body);

    ProfessionalModel.deleteOne({"_id":request.body.id})
    .then((Professional)=>
    {
        console.log("Professional eliminado con exito")
        response.send(Professional);
    })
    .catch((error)=>
    {
        console.log(error)
    })
}

module.exports = {getProfessional,postProfessional,putProfessional,delProfessional};