let cedula = parseFloat(prompt("ingrese su cedula"));
console.log("su cedula es: ", cedula);
let estado = prompt(
  "ingrese el estado en el que quiere estar (editar) o (ver)");

//switch case
switch (estado) {
  case "editar":
    cedula = parseInt(prompt("edite su cedula"));
    console.log("su cedula editada es: ", cedula);
    break;
  case "ver":
    console.log("su cedula es: ", cedula);
    break;
  default:
    console.log("No hay ninguna opcion con ese nombre");
    break;
}
