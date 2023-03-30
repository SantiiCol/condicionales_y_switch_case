//Se necesita crear un menu con los productos de la tienda de weed y que cuando el cliente digite el producto que desea compar
//muestre el precio, ademas que pida la edad al usuario, si es menor de edad no puede comprar si es mayor si
let edad = parseInt(prompt("ingrese su edad"));
let valid = !(edad<18);
if(valid){
alert("menu (grinder:1), (cueroSmall:2), (cueroMedium:3), (cueroBig:4) y (clipper:5)")
let productos = prompt("ingrese el numero del producto que desea comprar");
switch (productos) {
    case "1":
        console.log("Tiene un valor de 8.500$");
        break;
        case "2":
            console.log("Tiene un valor de 1.500$");
        break;
        case "3":
            console.log("tiene un valor de 2.000$");
        break;
        case "4":
            console.log("Tiene un valor de 3.000$");
        break;
        case "5":
            console.log("tiene un valor de 2.000$");
        break;
    default:
        console.log("Por el momento no tenemos tales productos");
        break;
};
}else{
    console.log("no puede comprar porque es menor de edad");
};