let bisiesto = parseInt(prompt("ingrese año"));
//let valid = bisiesto - 4
if (bisiesto%4 == 0 && (bisiesto%100 != 0 || bisiesto%400 == 0)){
    console.log("el año es bisiesto");
}else {
    console.log("el año no es bisiesto");
};