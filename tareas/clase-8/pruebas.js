function probarValidarNombre () {
    console.assert(validarNombre("") === "Este campo debe tener por lo menos un caracter", 
"Validar nombre no funciono con un string vacio");
//en ese console lo que está antes de la primera , es un boleano que siempre tenes que poner
//acá decimos que si el string está vacio y me devuelve ese EXACTO return, va a ser V y no tira error.
//lo que está despues de la 1era "," es el error que me va a saltar en la consola
    console.assert(validarNombre("11111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 50 caracteres",
"Validar nombre no funciona con más de 50 caracteres");
    console.assert(validarNombre("Yaco") === "",
    "");
}

probarValidarNombre();

function probarValidarciudad () {
    console.assert(
        validarCiudad("Buenos Aires") === "", 
    "This field did not work with a valid name"
    );

    console.assert(
       validarCiudad("") === "El campo ciudad no puede estar vacio",
    "validaCiudad no mostro error cuando la ciudad estaba vacia"
    );
}

probarValidarciudad()

function probarValidarRegalo () {
    console.assert(validarRegalo("") === "Este campo no puede estar vacio",
    "La función validar regalo no válido el campo porque está vacio");

    console.assert(validarRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 100 caracteres",
    "la función validar regalo, no válido que el campo sea muy largo")

    console.assert(validarRegalo("Gift") === "",
    "La función regalo no funciono con una descripción correcta");
}

/* 
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();
*/