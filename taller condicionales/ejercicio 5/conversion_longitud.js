let longitud = parseFloat(prompt("ingrese longitud"));
let medida = prompt("ingrese la unidad de medida (m) o (k)");
switch (medida) {
  case "m":
    resultado = longitud / 1000;
    console.log("es: ", resultado, "kilometros");
    break;
  case "k":
    resultado = longitud * 1000;
    console.log("es: ", resultado, "metros");
    break;
  default:
    console.log("la longitud no es valida");
    break;
};
