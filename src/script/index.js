
//consumir API
const API_URL = 'https://randomuser.me/api/';

const HTMLResponse = document.querySelector("#app");

// fetch(API_URL)
//     .then((response)=> response.json())
//     // .then((users)=>{
//     //     const template = users.map((user)=> `<li>${user.genero}</li>`);
//     //     HTMLResponse.innerHTML = `<ul>${template}</ul>`;
//     // });
//     .then((data) =>data.json())
//     .then((personas) => console.log(personas))
//console.log('esta conectado');

// const url_json = 'https://jsonplaceholder.typicode.com/users'
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => {
//         json.forEach(element => {
//             console.log(element.name)
            
//         });
//       })


// var datosPersona = {
//   nombre : "Juan",
//   calle : "",
//   telefono : ""
// }

let nombre;
let calle;
let telefono
// console.log(datosPersona)
const body = document.querySelector("#app");

const url_2 = 'https://randomuser.me/api';
fetch(url_2)
      .then((response) => response.json())
      .then((datos) => {
        //cuando en el json tenemos un [] como en este caso, en result. Debemos recorrerlo con un forEach para poder acceder a los elementos de los objetos internos.
        datos.results.forEach(elemento =>{
          // console.log(elemento.name.first);
          // const calle = elemento.location.street.name;
          // console.log(calle)
          // console.log(elemento.name.first)
          // console.log(elemento.location.coordinates.latitude)

          const cuerpo = document.createRange().createContextualFragment(`
            
            <header>
                <div class="img-container">
                   
                    <img src="${elemento.picture.medium}" alt=" Foto de Justin Shaifer: https://www.pexels.com/es-es/foto/fotografia-de-un-chico-con-camisa-verde-1222271/" class="foto-perfil">
        
                </div>
                <div class="nombre-container">
                    <h1 class="titulo--nombre">${elemento.name.first} ${elemento.name.last}</h1>
                    <p class="profecion">Profecion - Otras</p>
                </div>
            </header>
            <main>
                <section class="datos-personales">
                    
                    <h2 class="title">Perfil</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias error cum doloremque optio officiis architecto culpa amet maiores ipsa. Delectus a repellendus quis inventore ipsa pariatur quia. Reiciendis, vel.</p>
        
                    <h2 class="title">Datos Personales</h2>
                    <h3 class="sub-title">Domicilio</h3>
                    <p>${elemento.location.street.name} ${elemento.location.street.number} - ${elemento.nat} </p>
                    <h3 class="sub-title">Edad</h3>
                    <p>${elemento.dob.age} años - ${elemento.dob.date}</p>
        
                    <h2 class="title">Contacto</h2>
                    <a href="#" class="contact-mail">${elemento.email}</a>
                    <a href="#" class="contact-tel"> ${elemento.cell} </a>
        
                </section>
        
                <section class="experiencia-laboral">
                    <h2 class="experiencia-title title">Experiencia Laboral</h2>
                    <div class="card-experiencia">
                        <h3 class="card-title sub-title">Puesto</h3>
                        <div class="puesto-container">
                            <span>Empleador</span>
                            <span>Desde - Hasta</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias excepturi aperiam culpa veniam officia eligendi ullam neque id at voluptatem sunt, recusandae repellat praesentium ab sed totam earum nemo libero.</p>
                    </div>
                    <div class="card-experiencia">
                        <h3 class="card-title sub-title">Puesto</h3>
                        <div class="puesto-container">
                            <span>Empleador</span>
                            <span>Desde - Hasta</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias excepturi aperiam culpa veniam officia eligendi ullam neque id at voluptatem sunt, recusandae repellat praesentium ab sed totam earum nemo libero.</p>
                    </div>
                </section>
        
                <section class="estudios">
                    <h2 class="estudios-title title">Educacion</h2>
                    <div class="card-estudio">
                        <h3 class="card-title title">Puesto</h3>
                        <div class="lugar-container">
                            <span>Empleador</span>
                            <span>Desde - Hasta</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias excepturi aperiam culpa veniam officia eligendi ullam neque id at voluptatem sunt, recusandae repellat praesentium ab sed totam earum nemo libero.</p>
                    </div>
                </section>
            </main>
            
            `
        );

        body.append(cuerpo);
        
          })

        
          // console.log(datos.info.seed)
      
       
      
      });
      

console.log(nombre)

console.log()


// link de documentacion
// https://jsonplaceholder.typicode.com/
// https://randomuser.me/
// https://www.youtube.com/watch?v=9he4OewlYFo&ab_channel=Emprinnos <-- video sobre json