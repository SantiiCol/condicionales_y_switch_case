let password = (prompt("ingrese su contraseña"));
if (password.length >= 8 && password.length <= 15 && password.includes(" ")){
    console.log("la contraseña es valida");
}else{
    console.log("la contraseña es invalida");
};