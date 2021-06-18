let entra = parseInt(prompt("ingrese un número mayor a 100"));

if (entra >= 100) {
  alert("el numero es mayor o igual a 100");
} else if (entra < 100) {
  alert("el numero ingresado es menor a 100");
} else if (entra <= 0) {
  alert("ingrese un número positivo");
} else {
  alert("ingrese un número válido");
}
