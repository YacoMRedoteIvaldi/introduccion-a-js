//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//Poner todo en un array.

let lista = document.querySelectorAll("li");
let iniciador = [];
for (let i = 0; i <lista.length; i++) {
    iniciador.push(lista[i].innerText);     
};
//pasar el array, que es un String, a un Number
let arrayNumeros = iniciador.map(function (item) {
    return parseInt(item);
});
//Obtener el promedio.
let contador = 0
for (let i = 0; i < arrayNumeros.length;i++) {
    contador = contador + arrayNumeros[i];
} 

contador = contador / arrayNumeros.length;
contador = contador.toFixed(0); //sacar los decimales infinitos, podría usar el Math.max o min, supongo que debería ser min.
document.querySelector("#promedio").value = contador
// obtener el número más pequeño y más grande del array.
let numeroMayor = Math.max(...iniciador);
document.querySelector("#numeroMayor").value = numeroMayor
document.querySelector("#numeroMenor").value = Math.min(...iniciador)

// Obtener el número más repetido
let arrayDenumerosMasRepetidos = [];
let numeroMasRepetido = 0; //element
let contadorDeRepetición = 0; //count
for (let i = 0; i < arrayNumeros.length;i++) {
        let numeroActual = arrayNumeros[i] //tempElement
        let contadorTemporal = 0; //tempCount
    for (let j = i + 1; j <arrayNumeros.length; j++)
    if (arrayNumeros[i] === arrayNumeros[j]) {
        arrayDenumerosMasRepetidos.push(arrayNumeros[i]); 
        contadorTemporal++;
        if (contadorTemporal > contadorDeRepetición) {
            numeroMasRepetido = numeroActual; //element = tempElement
            contadorDeRepetición = contadorTemporal  // count = TempCount
        }

    }

}

document.querySelector("#numeroRepetido").value = numeroMasRepetido;

let arrayDeRepetidos = arrayDenumerosMasRepetidos;
for (let i = 0; i < arrayDeRepetidos.length;i++) { 
    for (let j= 0; j < arrayDeRepetidos.length;j++)
    if (i !== j) {
    if (arrayDeRepetidos[i] === arrayDeRepetidos[j]) {
        arrayDeRepetidos.splice(j,1);
    }
    }
}

document.querySelector("#numeroMasRepetidos").value = arrayDeRepetidos;


/*
otra forma
let arrayAuxiliar = []
for (let i = 0; i < arrayDeRepetidos;i++) {
    for (let j = 0; i < arrayDeRepetidos;j++) {
        if (arrayDeRepetidos[i] === arrayDeRepetidos[j] && !arrayAuxiliar.include(arrayDeRepetidos[i])) {
            arrayAuxiliar.push(arrayDeRepetidos[i])
        }
    }
}
console.log(arrayAuxiliar)
*/
