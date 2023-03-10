//1. Crea un array que contenga el nombre de cinco colores escritos como strings.
let colores = ["red", "green", "pink", "blue", "yellow"];
console.log(colores);

//2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let tercerColor = colores[2];
console.log(tercerColor);

//3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.
console.log(colores[0][0]);

//4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
console.log(getRandom(1, 99));

//5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
let numeros = [];
for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}
console.log(numeros);

//6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
let numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numerosAleatorios);

//7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
let numerosAleatoriosCopia = numerosAleatorios.slice();
console.log(numerosAleatoriosCopia);

//8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio.
let cadenas = [];
while (true) {
  let entrada = prompt("Ingrese una cadena de texto (o escriba 'cancelar' para salir):");
  if (entrada === "cancelar") {
    break;
  }
  cadenas.push(entrada);
}
let concatenacion = cadenas.join("-");
console.log(concatenacion);

//9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html.
//ver el archivo ejercicio09.html para el formulário.
function convertirDolEnPesos() {
    let dolares = parseFloat(document.getElementById("dolares").value);
    let pesos = dolares * 373;
    document.getElementById("pesos").value = pesos;
  }

//10. Generar la inversa del ejercicio anterior (de pesos a dólares).
//ver el archivo ejercicio10.html para el formulário.
function convertirPesosEnDol() {
    let pesos = parseFloat(document.getElementById("pesos").value);
    let dolares = pesos / 373;
    document.getElementById("dolares").value = dolares;
  }

//11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.
//ver el archivo ejercicio11.html para el formulario.
function convertirCelsiusEnFahrenheit() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (celsius * (9/5)) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
  }

//Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario podremos especificar las características de la caja.
//ver el archivo ejercicio12.html para el formulario.