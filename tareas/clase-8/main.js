
/*let $form = document.querySelector("#carta-a-santa");
// ese form, es literalmente el form del 
let nombre = $form.nombre.value;
// let nombre = document.querySelector("#name=nombre").value
// let nombre = document.querySelector("#nombre").value
let ciudad = $form.ciudad.value;
let comportamiento = $form.comportamiento.value;
let descripcionRegalo = $form["descripcion-regalo"].value; 
// no puedo hacer $form.descripción-regalo,value --> la maquina entiende que haces
//descripción MENOS valor (ósea, nada menos nada)


console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);
 */
let $form = document.querySelector("#carta-a-santa");
let nombre = $form.nombre.value;
let ciudad = $form.ciudad.value;
let comportamiento = $form.comportamiento.value;
let descripcionRegalo = $form["descripcion-regalo"].value; 

function validarNombre (nombre) {
    if (nombre.length === 0) {
    return "Este campo debe tener por lo menos un caracter"
}
   if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres"
}
    return ""
}

//las dos funciones siguientes no pueden/deben estar vacias.

function validarCiudad (ciudad) {
    if (ciudad.length === "") {
        return "El campo ciudad no puede estar vacio";
    }
    return "";
}

function validarRegalo (descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Este campo no puede estar vacio"
    } if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres"
    }
    return ""
}   