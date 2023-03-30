let estadoCivil = prompt("ingrese soltero o casado");
let casado = estadoCivil =="casado";
switch (casado) {
    case true:
        console.log("Muy bien");
        break;
    default:
        console.log("Disfrute su solteria");
        break;
}