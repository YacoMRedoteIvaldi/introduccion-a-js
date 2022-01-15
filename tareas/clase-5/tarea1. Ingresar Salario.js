//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

document.querySelector("#calcular-salario-mensual").onclick = function () {
    const mesesDelAño = 12;
    let salarioAnual = Number(document.querySelector("#salario-anual").value);
    salarioAnual = salarioAnual / mesesDelAño;
    document.querySelector("#salario-mensual").value = salarioAnual;
    return false;
};





