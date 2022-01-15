// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#creaClases").onclick = function () {
    let totalClases = Number(document.querySelector("#numeroDeClases").value);
    crearAclaracionLabel(totalClases)
    crearCampos(totalClases);
    return false
}

function crearAclaracionLabel () {
   document.querySelector("#aclaración").className = "";
}

function crearCampos (cantidadDeClases) {
    for (let i = 0; i < cantidadDeClases;i++) {
        let ponerNodo = document.querySelector("#secciónClases");

        let crearInputHoras = document.createElement("input");
        crearInputHoras.id = "horas";
        crearInputHoras.type = "number";

        let crearInputMinutos = document.createElement("input");
        crearInputMinutos.id = "minutos";
        crearInputMinutos.type = "number"

        let crearInputSegundos = document.createElement("input");
        crearInputSegundos.id = "segundos";
        crearInputMinutos.type = "number"

        let crearEspacio = document.createElement("br")

        ponerNodo.appendChild(crearInputHoras);
        ponerNodo.appendChild(crearInputMinutos);
        ponerNodo.appendChild(crearInputSegundos);
        ponerNodo.appendChild(crearEspacio);

    }
}

document.querySelector("#tiempoTotal").onclick = function () {
    let horas = obtenerHoras()
    let minutos = obtenerMinutos()
    let segundos = obtenerSegundos()
    mostrarResultados (horas, minutos, segundos)
    return false;
}

function obtenerHoras() {
    let horasInputs = document.querySelectorAll("#horas")
    let horas = [];
    for (let i = 0; i < horasInputs.length;i++) {
       horas.push(Number(horasInputs[i].value))
        //horas.push(Number(document.querySelectorAll("#horas")[i].value)); (otra forma)
    }
    let horasTotales = 0
    for (let i = 0; i < horas.length;i++) {
    horasTotales = horasTotales + horas[i]
    }
    return horasTotales;
}

function obtenerMinutos() {
    let minutosInputs = document.querySelectorAll("#minutos")
    let minutos = [];
    for (let i = 0; i < minutosInputs.length;i++) {
        minutos.push(Number(minutosInputs[i].value));
        
    }
    let minutosTotales = 0
    for (let i = 0; i < minutos.length;i++) {
    minutosTotales = minutosTotales + minutos[i]
    }
    return minutosTotales;
}

function obtenerSegundos() {
    let segundosInputs = document.querySelectorAll("#segundos")
    let segundos = [];
    for (let i = 0; i < segundosInputs.length;i++) {
        segundos.push(Number(segundosInputs[i].value));
        
    }
    let segundosTotales = 0
    for (let i = 0; i < segundos.length;i++) {
    segundosTotales = segundosTotales + segundos[i]
    }
    return segundosTotales;
}

function mostrarResultados (horas, minutos, segundos) {
    let segundosAMostrar = segundos % 60;
    let minutosAMostrar = (Math.floor(minutos + segundos / 60)) % 60;
    let horasAMostrar = Math.floor(horas + minutos / 60 + segundos / 3600);
    document.querySelector("#mensaje").className = "";
    
    document.querySelector("#mensaje").value = `Las horas totales son ${horasAMostrar}, mientras que los minutos son ${minutosAMostrar} y los segundos ${segundosAMostrar}`;
}