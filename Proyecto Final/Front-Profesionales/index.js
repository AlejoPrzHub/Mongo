class Professional 
{

constructor(nome,age,weight,height,nationality,profession)
{
    this.nome = nome;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.nationality = nationality;
    this.profession = profession;

}
    printAll()
    {
        console.group(Professional)
            console.log("Name - " + this.nome);
            console.log("Age - " + this.age);
            console.log("Weight - " + this.weight);
            console.log("Height - " + this.height);
            console.log("Is Retired? - " + this.isRetired);
            console.log("Nacionality - " + this.nationality);
            console.log("Oscars Numbers - " + this.oscarsNumber);
            console.log("Profession - " + this.profession);
        console.groupEnd(); 
    }
}

async function postProfessional()
{
        try
        {
            
            let nome = document.getElementById("nome");
            let profession = document.getElementById("profession");
            let age = document.getElementById("age");
            let weight = document.getElementById("weight");
            let height = document.getElementById("height");
            let nationality = document.getElementById("nationality");

            let profesional = new Professional(nome.value,age.value,weight.value,height.value.value,nationality.value,profession.value)

            let url = "http://localhost:3000/Professional";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(profesional),
                method:"POST"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            console.log(result)
        }
        catch(error){console.log(error)}
}


async function getProfessional()
{
        try
        {
            let idFront = document.getElementById("id").value
            
            let url;
            if(idFront =="")
            {
                url = `http://localhost:3000/Professional`
            }
            else(url = `http://localhost:3000/Professional/?id=${idFront}`)
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                method:"GET"
                
            }
            
            let data = await fetch(url,param);
            let result = await data.json()
            console.log(result);
            let tarjeta = document.getElementById("prof")
            let div = document.createElement("div")
            
            if(result.length > 1)
            {
            tarjeta.innerHTML = "" 
            for(let i=0;i<result.length;i++)
            {div.innerHTML +=
                (`<div class="card">
                <p>Name: ${result[i].nome}</p>
                <p>Profession: ${result[i].profession} </p>
                <p>Age: ${result[i].age} </p>
                <p>Weight: ${result[i].weight} </p>
                <p>Height: ${result[i].height}</p>
                <p>Nationality: ${result[i].nationality}</p>`)
                tarjeta.appendChild(div)}}

            else 
                {div.innerHTML =( 
                `<div class="card">
                <p>Name: ${result.nome}</p>
                <p>Profession: ${result.profession} </p>
                <p>Age: ${result.age} </p>
                <p>Weight: ${result.weight} </p>
                <p>Height: ${result.height}</p>
                <p>Nationality: ${result.nationality}</p>`)
                tarjeta.appendChild(div)}
 
        }
        catch(error){console.log(error)}
}



async function delProfessional()
{
    try
    {
        let id = document.getElementById("id").value
        let url = "http://localhost:3000/Professional";
        let param =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify({"id": id}),
            method:"DELETE"
        }

        let data = await fetch(url,param);
        let result = await data.json()
        
        console.log(result)
    }
    catch(error){console.log(error)}
}

async function putProfessional()
{
        try
        {
            let idFront = document.getElementById("id").value
            let nome = document.getElementById("nome").value;
            let profession = document.getElementById("profession").value;
            let age = document.getElementById("age").value;
            let weight = document.getElementById("weight").value;
            let height = document.getElementById("height").value;
            let nationality = document.getElementById("nationality").value;

            let nuevo = {nome:nome?nome:null,age:age?age:null,weight:weight?weight:null,height:height?height:null,nationality:nationality?nationality:null,profession:profession?profession:null,id:idFront}
            let url = "http://localhost:3000/Professional";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(nuevo),
                method:"PUT"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            console.log(result)
        }
        catch(error){console.log(error)}
}