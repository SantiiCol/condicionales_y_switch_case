//crear un programa que reciba el sisben de un usuario y muestre si este tiene derecho a un subsidio o no.
//Si el sisben es 1,2 o 3 el usuario tiene derecho

let sisben = parseInt(prompt("ingrese el nivel de su sisben"));
switch (sisben) {
    case 1:
        console.log("Tiene derecho a subsidio");
        break;
    case 2:
        console.log("Tiene derecho a subsidio");
        break;
    case 3:
        console.log("Tiene derecho a subsidio");
        break;
    default:
        console.log("No tiene derecho a subsidio");
        break;
};