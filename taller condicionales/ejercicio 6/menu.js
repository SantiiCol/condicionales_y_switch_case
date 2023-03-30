let pedido = prompt("elegir tipo de hamburguesa: (especial), (dobleCarne) y (sencilla)");
switch (pedido) {
    case "especial":
        console.log("el precio es: 17.000$");
        break;
        case "dobleCarne":
            console.log("el precio es: 20.000$");
        break;
        case "sencilla":
            console.log("el precio es 14.900$");
        break;
    default:
        console.log("Nombre no valido digite de nuevo porfavor");
        break;
};