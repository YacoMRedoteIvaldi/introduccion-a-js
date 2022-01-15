//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

//////////////////////////////////////////////////////////////////////
/////////// vas a ver que hay tres formas de hacerlo//////////////////
//////////////////////////////////////////////////////////////////////


 //Creando tags/nodos y sin ARRAY
document.querySelector("#boton").onclick = function () {
    let primerNombre = document.querySelector("#primer-nombre").value;
    let segundoNombre = document.querySelector("#segundo-nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = document.querySelector("#edadUsuario").value;  
    let mensajeFinal = `Tu eres ${primerNombre} ${segundoNombre} ${apellido} y tu edad es ${edad}` 
    
  
    const nuevoParrafo = document.createElement("p");
    const textoParrafo = document.createTextNode(mensajeFinal);
    nuevoParrafo.appendChild(textoParrafo);
    const nuevoNodo = document.querySelector("body");
    nuevoNodo.appendChild(nuevoParrafo)
    
    document.querySelector("h1").textContent = `Bievenido ${primerNombre}`;
    
    return false;
};


/* Usando ARRAY y sin crear tags/nodos
document.querySelector("#boton").onclick = function () {
    let primerNombre = String(document.querySelector("#primer-nombre").value);
    let segundoNombre = String(document.querySelector("#segundo-nombre").value);
    let apellido = String(document.querySelector("#apellido").value);
    let edad = Number(document.querySelector("#edadUsuario").value); 
    
    const mensajeFinal = [primerNombre, segundoNombre, apellido, edad];
    let información1 = mensajeFinal[0];
    let información2 = mensajeFinal[1];
    let información3 = mensajeFinal[2];
    let información4 = mensajeFinal[3];

    document.querySelector("#datos-personales-usuario").value = `Tu erés ${información1} ${información2} ${información3} y tu edad es ${información4}`
    
    document.querySelector("h1").textContent = `Bievenido ${primerNombre}`;
    
    return false;
};
*/ 


/*
Otra forma interesante para no crear todo ese choclo es
 document.querySelector("#datos-personales-usuario"
 ).value = `Tu eres ${primerNombre} ${segundoNombre} ${apellido} y tu edad es ${edad}`;

 y en el html tener un <input type="text" disabled id="datos-personales-usuario"/>
*/







