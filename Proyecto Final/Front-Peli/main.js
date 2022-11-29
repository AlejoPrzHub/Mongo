// clases
class Movie
{
    constructor(title,releaseYear,{actors},genre,{director},producer,{guionista})
    {

        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.director = {director};
        this.guionista = {guionista};
        this.producer = producer;
        this.actors = {actors};
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



// modal

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.getElementById("modal");
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e)
{
    e.preventDefault();
    modalC.style.opacity ="1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")

});

cerrar.addEventListener("click",function()
{
    
    modal.classList.toggle("modal-close")
    setTimeout(function()
    {modalC.style.opacity ="0";
    modalC.style.visibility = "hidden";},700)
});


// funciones

let peliculas=[];

function agregarPeliculas()
{
    let imagen = document.getElementById("imgAdd");
    let titulo = document.getElementById("titulo");
    let anyo = document.getElementById("anyo");
    let genero = document.getElementById("genero");
    let idioma = document.getElementById("idioma");
    let plataforma = document.getElementById("plataforma");
    let mcu = document.getElementById("mcu");

    let peli = new Movie(imagen.value,titulo.value,anyo.value,genero.value,0,genero.value,0,0,0,idioma.value,plataforma.value,mcu.value,0,0);

    
    const cuerpo = document.getElementById("modal-cuerpo");
    function mostrarPeliculas()
    {
        const div = document.createElement(`div`);
        div.innerHTML=
        `
        <div class="pelicula" id="peliculas">
                            <div class="peli"><img src="img/El_Cover-669626430-large.jpg" alt=""></div>
                            <div class="contenido">
                                <p id="t1">${peli.title}</p>
                                <p id="t2">${peli.releaseYear}</p>
                                <p id="t3">${peli.genre}</p>
                                <p id="t4">${peli.language}</p>
                                <p id="t5">${peli.plataforma}</p>
                                <p id="t6">${peli.isMCU}</p>
                            </div>
                        </div>
        `
        cuerpo.appendChild(div);
    }

    peliculas.push(peli);
    mostrarPeliculas(peliculas)

}

    
    

    
    


