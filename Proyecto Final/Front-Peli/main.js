// clases
class Movie
{
    constructor(title,releaseYear,[actors],genre,[director],producer,[guionista])
    {

        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.director = [director];
        this.guionista = [guionista];
        this.producer = producer;
        this.actors = [actors];
    }

    printAll()
    {
        console.group(Movie)
            console.log("Title - " + this.title);
            console.log("Release Year - " + this.releaseYear);
            console.log("Genre- " + this.genre);
            console.log("Actors - " + this.actors);
            console.log("Director - " + this.director);
            console.log("Writer - " + this.guionista);
            console.log("Producer - " + this.producer);
        console.groupEnd();
    }
}


// funciones

async function getPeliculas()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            
            let url;
            if(idFront =="")
            {
                url = `http://localhost:3000/Peliculas`
            }
            else(url = `http://localhost:3000/Peliculas/?id=${idFront}`)
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                method:"GET"
            }
            
            let data = await fetch(url,param);
            let result = await data.json()
            console.log(result);
            let tarjeta = document.getElementById("peliculas")
            let div = document.createElement("div")
            
            if(result.length > 1)
            {
            tarjeta.innerHTML = "" 
            for(let i=0;i<result.length;i++)
            {div.innerHTML +=
                (`<div class="contenido">
                <p>Titulo: ${result[i].title}</p>
                <p>Año lanzamiento: ${result[i].releaseYear} </p>
                <p>Genero: ${result[i].genre} </p>
                <p>Director: ${result[i].director} </p>
                <p>Guionista: ${result[i].guionista}</p>
                <p>Productor: ${result[i].producer}</p>
                <p>Actores: ${result[i].actors}</p>`)
                tarjeta.appendChild(div)}}

            else 
                {div.innerHTML =( 
                `<div class="contenido">
                <p>Titulo: ${result.title}</p>
                <p>Año lanzamiento: ${result.releaseYear} </p>
                <p>Genero: ${result.genre} </p>
                <p>Director: ${result.director} </p>
                <p>Guionista: ${result.guionista}</p>
                <p>Productor: ${result.producer}</p>
                <p>Actores: ${result.actors}</p>`)
                tarjeta.appendChild(div)}
 
        }
        catch(error){console.log(error)}
}

async function delPeliculas()
{
    try
    {
        let id = document.getElementById("idFront").value
        let url = "http://localhost:3000/Peliculas";
        let param =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify({"_id": id}),
            method:"DELETE"
        }

        let data = await fetch(url,param);
        let result = await data.json()
        
        console.log(result)
    }
    catch(error){console.log(error)}
}

async function putPeliculas()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            let title = document.getElementById("titulo").value;
            let releaseYear = document.getElementById("anyo").value;
            let genre = document.getElementById("genero").value;
            let director = document.getElementById("director").value;
            let guionista = document.getElementById("guionista").value;
            let producer = document.getElementById("producer").value;
            let actores = document.getElementById("actores").value;

            let nuevo = {title:title,releaseYear:releaseYear,genre:genre,director:director,guionista:guionista,producer:producer,actores:actores,_id:idFront}
            let url = "http://localhost:3000/Peliculas";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(nuevo),
                method:"PUT"
            }
            let data = await fetch(url,param);
            let result = await data.genero
            
            console.log(result)
        }
        catch(error){console.log(error)}
}

async function postPeliculas()
{
        try
        {
            
            let titulo = document.getElementById("titulo").value;
            let anyo = document.getElementById("anyo").value;
            let genero = document.getElementById("genero").value;
            let director = document.getElementById("director").value;
            let guionista = document.getElementById("guionista").value;
            let producer = document.getElementById("producer").value;
            let actores = document.getElementById("actores").value;

            let movie = new Movie(titulo,anyo,genero,director,guionista,producer,actores)

            let url = "http://localhost:3000/Peliculas";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(movie),
                method:"POST"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            console.log(result)
        }
        catch(error){console.log(error)}
}
    
    

    
    


