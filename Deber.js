/*Lista
1. Solicitar el nombre del usuario y mostrar un saludo.
2. Pedir dos números y mostrar su suma.
3. Pedir un número y mostrar su doble y triple.
4. Solicitar los lados de un rectángulo y calcular su área.
5. Convertir grados Celsius a Fahrenheit.
6. Pedir edad y mostrar si es mayor de edad.
7. Comparar dos números y mostrar cuál es mayor.
8. Calcular el promedio de 3 notas.
9. Determinar si un número es par o impar.
10. Determinar si un número es positivo, negativo o cero.
11. Calcular descuento según monto de compra. (< $100 = 0% desc., entre >100 y < 150 =
10% desc., >150 = 15% desc.)
12. Solicite al usuario su edad, valide que la edad sea un número positivo y muestre la
categoría a la que pertenece. (Niño 0 a 12 años, Joven 13 a 17, Adulto 18 en adelante)
13. Defina un usuario y contraseña si mulando los registros de una BD. Solicite al usuario
que por teclado ingrese un usuario y una contraseña. Presentar el usuario tiene Acceso
Concedido o Denegado.
14. Presentar un Menú con opciones básicas. Solicitar al usuario que elija una opción,
presentar la funcionalidad seleccionada o caso contrario presentar mensaje de error.
15. Validar si un año es bisiesto.
16. Calcular el mayor de 3 números.
17. Un docente necesita evaluar el rendimiento de sus estudiantes. Solicite la nota de un
estudiante (0 a 10), valide que esté dentro del rango correcto y Muestre la letra y el
mensaje correspondiente.
18. Usar operador ternario para validar acceso.
19. Mostrar números del 1 al 10 con for.
20. Sumar números ingresados por el usuario hasta que el usuario ingrese 0 (while).
21. Solicite al usuario ingresar un número por teclado y presente la tabla de multiplicar de
ese número.
22. Solicitar ingresar al usuario un valor numérico (este será la longitud de un arreglo),
posterior solicitar al usuario que ingrese la cantidad de valores dentro del arreglo.
Contar y presentar cuántos números positivos ingresa el usuario.
23. Definir un número. Solicitar al usuario que inserte un número hasta adivinar número
(con intentos limitados). Brindar pistas de que tan cerca está el número, si el usuario se
ha pasado o si está antes del valor.
24. Crear función para calcular promedio.
25. Función que determine si un número es primo.
26. Función recursiva para factorial.
27. Sistema completo (Calculadora):
• Menú
• Funciones
*/
const prompt = require('prompt-sync')();

//Auxliares
function noSimbolos(texto) {
    let regla = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    return regla.test(texto)
}

function mostrarOpciones() {
    console.log("\n0 = Salir");
    console.log("1 = Siguiente ejercicio");
    console.log("2 = Repetir ejercicio");
}

function leerOpcion() {
    return prompt("Seleccione una opción: ");
}
function opciones(ejercicioX) {

    let opcion;

    do {

        ejercicioX();

        mostrarOpciones();
        opcion = leerOpcion();

        if (opcion === "0") {
            console.log("Programa finalizado");
            process.exit();
        }

    } while (opcion === "2");
}

//1. Pedir el nombre del usuario y mostrar un saludo.
function pedirNombre(){ 
console.log("EJERCICIO 1");
let nombre_usuario = prompt("Ingrese su nombre: ");

if (nombre_usuario.trim() === "" || !isNaN(nombre_usuario) ) {
    console.log("Error: El nombre no puede estar vacío, y solo puede contener letras.");
} else if  (!noSimbolos(nombre_usuario)) {
    console.log ("Error: no debe tener simbolos");  
} else {
    console.log(`Bienvenido ${nombre_usuario}, saludos coordiales`);
}
}
opciones(pedirNombre);

//2. Pedir dos números y mostrar su suma.
function ejercicio2(){
console.log ("\n EJERCICIO 2");
let primer_numero = parseInt (prompt("Ingrese el primer número a sumar: "));
let segundo_numero = parseInt (prompt("Ingrese el segundo número a sumar: "));
if (isNaN(primer_numero) || isNaN(segundo_numero)) {
    console.log("Error, ingrese solo numeros");
} else {
let resultado_suma = primer_numero+segundo_numero;
console.log(`El resultado de ${primer_numero} + ${segundo_numero} = ${resultado_suma}`);
}
}
opciones(ejercicio2);

//3. Pedir un número y mostrar su doble y triple.
function ejercicio3(){
console.log("\n EJERCICIO 3");
let pedir_numero = parseInt(prompt("Ingrese un número: "));
if (isNaN(pedir_numero)) {
    console.log("Error, ingrese solo numeros");
} else {
    let doble = pedir_numero * 2;
    let triple = pedir_numero * 3;
    console.log(`El doble de ${pedir_numero} es ${doble} \nEl triple de ${pedir_numero} es ${triple}`);
}
}
opciones(ejercicio3);

//4. Solicitar los lados de un rectángulo y calcular su área.
function ejercicio4(){
console.log ("\n EJERCICIO 4");
let base = parseFloat (prompt ("Ingrese la base del rectángulo: "));
let altura = parseFloat (prompt ("Ingrese la altura del rectángulo: "));
let área = base*altura;
if (isNaN(base) || isNaN(altura)){
    console.log("Error, ingrese solo numeros")
}   else 
console.log (`El rectángulo con base ${base} y altura ${altura} tiene un área de ${área}`);
}
opciones(ejercicio4);

//5. Convertir grados Celsius a Fahrenheit.
function ejercicio5(){
console.log("\n EJERCICIO 5");
let gradosCelsius = parseFloat(prompt("Ingrese los grados Celsius: "));

if (isNaN(gradosCelsius)) {
    console.log("Error: Por favor, ingrese un número válido.");
} else {
    let fahrenheit = (gradosCelsius * 1.8) + 32;
    console.log(`Los ${gradosCelsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);
}
}
opciones(ejercicio5);

//6. Pedir edad y mostrar si es mayor de edad.
function ejercicio6(){
console.log("\n EJERCICIO 6");
let edad_usuario = parseInt(prompt("Ingrese su edad: "));
if (isNaN(edad_usuario) || edad_usuario < 0) {
    console.log("Ingrese una edad válida.");
} else if (edad_usuario >= 18) {
    console.log(`Tiene ${edad_usuario} años, es mayor de edad.`);
} else {
    console.log(`Tiene ${edad_usuario} años, es menor de edad.`);
}
}
opciones(ejercicio6);

//7. Comparar dos números y mostrar cuál es mayor.
function ejercicio7(){
console.log("\n EJERCICIO 7");
let numero_uno = parseFloat(prompt("Ingrese primer número a comparar: "));
let numero_dos = parseFloat(prompt("Ingrese segundo número a comparar: "));
if (isNaN(numero_uno) || isNaN(numero_dos)){
    console.log("Error, ingrese solo numeros");
} else if (numero_uno>numero_dos){
    console.log(`El primer número (${numero_uno}) es mayor que el (${numero_dos})`);
} else if (numero_uno<numero_dos){
    console.log(`El segundo número (${numero_dos}) es mayor que el primer número ${numero_uno}`);
} else
    console.log(`El primer número (${numero_uno}) es igual que el segundo número (${numero_dos})`);
}
opciones(ejercicio7);

//8 Calcular el promedio de 3 notas.
function ejercicio8(){
console.log("\n EJERCICIO 8");
let primera_nota = parseFloat (prompt("Ingrese la primera nota: "));
let segunda_nota = parseFloat (prompt("Ingrese la segunda nota: "));
let tercera_nota = parseFloat (prompt("Ingrese la tercera nota: "));
let promedio_notas = (primera_nota + segunda_nota + tercera_nota) / 3
if (isNaN(primera_nota) || isNaN(segunda_nota) || isNaN(tercera_nota)){
    console.log("Error, ingrese solo numeros")
}   else 
    console.log(`El promedio de las notas es ${promedio_notas.toFixed(2)}`);
}
opciones(ejercicio8);

//9. Determinar si un número es par o impar.
function ejercicio9(){
console.log("\n EJERCICIO 9");
let par_impar = parseInt (prompt("Ingrese un número: "));
if (isNaN(par_impar)){
    console.log("Error, ingrese solo numeros");
}   else if (par_impar % 2 === 0) {
    console.log(`El número ${par_impar} es par`);
}   else {
    console.log(`El número ${par_impar} es impar`);
}
}
opciones(ejercicio9);

//10. Determinar si un número es positivo, negativo o cero.
function ejercicio10(){
console.log("\n EJERCICIO 10");
let valor_ingresado = parseFloat (prompt("Ingrese un número a identificar: "));
if (isNaN(valor_ingresado)){
    console.log("Error, ingrese solo numeros");
}   else if (valor_ingresado>0) {
    console.log(`El número ${valor_ingresado} es positivo`);
}   else if (valor_ingresado<0) {
    console.log(`El número ${valor_ingresado} es negativo`);
}   else {
    console.log(`El número es cero`);
}
}
opciones(ejercicio10);

//11. Calcular descuento según monto de compra. (< $100 = 0% desc., entre >100 y < 150 =  10% desc., >150 = 15% desc.)
function ejercicio11(){
console.log("\n EJERCICIO 11");
let monto_compra = parseFloat (prompt("Ingrese su monto de compra: "));
let primer_descuento = 0, segundo_descuento=0
if (isNaN(monto_compra)){
    console.log("Error, ingrese solo numeros");
}   else if (monto_compra<=100) {
    console.log(`Su monto de compra (${monto_compra}) no recibe descuento`);
}   else if (monto_compra>100 && monto_compra<150) {
    primer_descuento = (monto_compra*0.10);
    console.log(`Su monto de compra (${monto_compra}) recibe descuento de 10% (${primer_descuento}$)`);
}   else {
    segundo_descuento = (monto_compra*0.15)
    console.log(`Su monto de compra (${monto_compra}) recibe descuento de 15% (${segundo_descuento}$)`);
}
}
opciones(ejercicio11);

//12. Solicite al usuario su edad, valide que la edad sea un número positivo y muestre la
//categoría a la que pertenece. (Niño 0 a 12 años, Joven 13 a 17, Adulto 18 en adelante)
function ejercicio12(){
console.log("\n EJERCICIO 12");
const edad_ingresada = parseInt(prompt("Ingrese su edad: "));

if (isNaN(edad_ingresada) || edad_ingresada < 0) {
    console.log("Error, ingrese una edad válida (número positivo)");

} else if (edad_ingresada <= 12) {
    console.log(`Tiene ${edad_ingresada} años: Categoría Niño`);

} else if (edad_ingresada >= 13 && edad_ingresada <= 17) {
    console.log(`Tiene ${edad_ingresada} años: Categoría Joven`);

} else {
    console.log(`Tiene ${edad_ingresada} años: Categoría Adulto`);
}
}
opciones(ejercicio12);

// 13. Defina un usuario y contraseña si mulando los registros de una BD. Solicite al usuario
// que por teclado ingrese un usuario y una contraseña. Presentar el usuario tiene Acceso Concedido o Denegado.
function ejercicio13(){
console.log("\n EJERCICIO 13");
const usuarioBD = "admin";
const claveBD = "1234";
let registro_Usuario = prompt("Ingrese su nombre de usuario: ");
let registro_Clave = prompt("Ingrese su contraseña: ");

if (registro_Usuario.trim() === "" || registro_Clave.trim() === "") {
    console.log("Error: El usuario o contraseña no pueden estar vacíos.");
}else if (registro_Usuario === usuarioBD && registro_Clave === claveBD) {
    console.log("Acceso concedido: Bienvenido al sistema.");
} else {
    console.log("Acceso denegado: Usuario o contraseña incorrectos.");
}
}
opciones(ejercicio13);

//14. Presentar un Menú con opciones básicas. Solicitar al usuario que elija una opción,
//presentar la funcionalidad seleccionada o caso contrario presentar mensaje de error.
function ejercicio14(){
console.log("\n EJERCICIO 14");
console.log("MENU");
console.log("1. Saludar");
console.log("2. Mostrar fecha");
console.log("3. Mostrar mensaje motivacional");
console.log("4. Salir");

let opcion = parseInt(prompt("Elija una opción: "));
switch(opcion) {
    case 1:
        pedirNombre()
        break;
    case 2:
        let fecha = new Date();
        console.log("La fecha actual es: " + fecha.toLocaleDateString());
        break;
    case 3:
        console.log("No te rindas");
        break;
    case 4:
        console.log("Saliendo del programa");
        break;
    default:
        console.log("Error: no existe esa opción.");
}
}
opciones(ejercicio14);

//15. Validar si un año es bisiesto.
function ejercicio15(){
console.log("\n EJERCICIO 15");
let ingresar_año = parseInt (prompt("Ingrese un año ara validar si es bisiesto o no: "));
if (isNaN(ingresar_año)){
    console.log("Error, ingrese solo años, no se permiten símbolos");
    } else if (ingresar_año % 4 === 0) {
    console.log(`El año ${ingresar_año} si es bisiesto`);    
    } else
        console.log(`El año ${ingresar_año} no es bisiesto`);        
}
opciones(ejercicio15);

//16. Calcular el mayor de 3 números.
function ejercicio16(){
console.log("\n EJERCICIO 16");
let primer_numero = parseFloat(prompt("Ingrese primer número a comparar: "));
let segundo_numero = parseFloat(prompt("Ingrese segundo número a comparar: "));
let tercer_numero = parseFloat(prompt("Ingrese tercer número a comparar: "));
if (isNaN(primer_numero) || isNaN(segundo_numero) || isNaN(tercer_numero)){
    console.log("Error, ingrese solo numeros y no dejar vacios");
} else if (primer_numero>segundo_numero && primer_numero>tercer_numero){
    console.log(`El primer número (${primer_numero}) es mayor que el segundo número (${segundo_numero}) y tambien que el tercer número (${tercer_numero})`);

} else if (segundo_numero>primer_numero && segundo_numero>tercer_numero){
    console.log(`El segundo número (${segundo_numero}) es mayor que el primer número (${primer_numero}) y tambien que el tercer número (${tercer_numero})`);

} else if (tercer_numero>primer_numero && tercer_numero>segundo_numero){
    console.log(`El tercer número (${tercer_numero}) es mayor que el primer número (${primer_numero}) y tambien que el segundo número (${segundo_numero})`);

} else if (primer_numero === segundo_numero && segundo_numero === tercer_numero){
    console.log(`El primer número (${primer_numero}) es igual que el segundo número (${segundo_numero}) y tambien que el tercer número (${tercer_numero})`);
}
}
opciones(ejercicio16);

//17. Un docente necesita evaluar el rendimiento de sus estudiantes. Solicite la nota de un
//estudiante (0 a 10), valide que esté dentro del rango correcto y Muestre la letra y el
//mensaje correspondiente.
function ejercicio17(){
console.log("\n EJERCICIO 17");
let nota_estudiante = parseFloat(prompt("Ingrese la nota del estudiante (0 - 10): "));
if (isNaN(nota_estudiante) || (nota_estudiante<0) || (nota_estudiante>10)){
    console.log("Error, ingrese solo numeros, no dejar vacios y no pueden ser notas negativas o mayores a 10");
} else if ((nota_estudiante>=9) && (nota_estudiante<=10)){
    console.log(`La nota del estudiante es: ${nota_estudiante} = A (Excelente)`);
    } else if ((nota_estudiante>=7) && (nota_estudiante<=8)){
    console.log(`La nota del estudiante es: ${nota_estudiante} = B (Bueno)`);
    } else if ((nota_estudiante>=5) && (nota_estudiante<=6)){
    console.log(`La nota del estudiante es: ${nota_estudiante} = C (Regular)`);
    } else {
    console.log(`La nota del estudiante es: ${nota_estudiante} = D (Reprobado)`);
}
}
opciones(ejercicio17);

//18. Usar operador ternario para validar acceso.
function ejercicio18(){
console.log("\n EJERCICIO 18");
console.log("Para subir a esta atraccion necesitas tener 18 años");
const requisito_edad = (prompt("¿Cumples con los requisitos? (Si/No) ")).toLowerCase();

if (requisito_edad.trim() === "") {
    console.log("Error, no dejar vacío.");
} else if (requisito_edad !== "si" && requisito_edad !== "no") {
    console.log('Error, solo se permite responder "Si" o "No".');
} else {
    (requisito_edad === "si") 
        ? console.log("Cumples los requisitos: PUEDES SUBIR") 
        : console.log("No cumples los requisitos: NO PUEDES SUBIR");
}
}
opciones(ejercicio18);

//19. Mostrar números del 1 al 10 con for.
function ejercicio19(){
console.log("\n EJERCICIO 19");
console.log("Numeros del 1 al 10:");
for( let contador=1 ; contador<=10 ; contador++){
 console.log (contador)
}
}
opciones(ejercicio19);

//20. Sumar números ingresados por el usuario hasta que el usuario ingrese 0 (while).
function ejercicio20(){
console.log("\nEJERCICIO 20");
let suma = 0;
let numero = parseInt(prompt("Ingrese un número (0 para terminar): "));
while(numero != 0){
if (isNaN(numero)){
    console.log ("Ingrese solo números, no dejar vacio, no usar simbolos.")
}
else{
    suma = suma + numero;
}
    numero = parseInt(prompt("Ingrese otro numero (0 para terminar):"));
}
    console.log("La suma total es:", suma);
}
ejercicio20();

//21. Solicite al usuario ingresar un número por teclado y presente la tabla de multiplicar de ese número.
function ejercicio21(){
console.log("\nEJERCICIO 21");
let numero_ingresado = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));
let cantidad_tabla = parseInt(prompt("Ingresar hasta que cantidad de la tabla de multiplicar desea (Máximo hasta 20): "));

if (isNaN(numero_ingresado) || isNaN(cantidad_tabla)){
    console.log ("Ingrese solo números, no dejar vacio, no usar simbolos.")
}
else if (cantidad_tabla>20){
    console.log("Error, la cantidad de tabla de multiplicar como máximo es hasta el número 20")
}
else{
for (let contador=1; contador<=cantidad_tabla; contador++){
console.log(`${numero_ingresado} * ${contador} = ${numero_ingresado * contador}  `);
}
}
}
opciones(ejercicio21);


//22. Solicitar ingresar al usuario un valor numérico (este será la longitud de un arreglo),
//posterior solicitar al usuario que ingrese la cantidad de valores dentro del arreglo.
function ejercicio22(){
console.log("\nEJERCICIO 22");
let longitud_arreglo = parseInt(prompt("Ingrese la longitud del arreglo: "));
    let arreglo = [];
    if(isNaN(longitud_arreglo) || longitud_arreglo<=0 ){
        console.log("Ingrese solo números, no dejar vacío, no usar símbolos.");
    }
    else{
        for(let posicion = 0; posicion < longitud_arreglo; posicion++){
            let valor_dentro = parseInt(prompt(`Ingrese el valor para la posición N°${posicion}:`));
            if(isNaN(valor_dentro)){
                console.log("Ingrese solo números.");
            }
            else{
                arreglo.push(valor_dentro);
            }
        }
        console.log(arreglo);
    }
}

ejercicio22();

//23. Definir un número. Solicitar al usuario que inserte un número hasta adivinar número
//(con intentos limitados). Brindar pistas de que tan cerca está el número, si el usuario se
//ha pasado o si está antes del valor.
function ejercicio23(){
console.log("\nEJERCICIO 23");
const numero_secreto = 14;
let intentos = 3
while(intentos>0){
let adivinar_numero = parseInt(prompt("Ingrese un número entre el 0-30: "));
if (isNaN(adivinar_numero)){
    console.log ("Ingrese solo números, no dejar vacio, no usar simbolos.")
}
else if((adivinar_numero < 0 || adivinar_numero > 30)){
     console.log("Ingrese un número entre 0 y 30");
}
else if(adivinar_numero == numero_secreto){
console.log("¡Adivinaste el número!");
break;
} 
else if(adivinar_numero > numero_secreto){
    let diferencia = adivinar_numero - numero_secreto;
    if(diferencia == 1){
        console.log("Muy cerca, Piensa un poco MENOS.");
    }
    else if(diferencia <= 3){
        console.log("Algo cerca, pero todavía te pasaste.");
    }
    else{
        console.log("Muy lejos, te pasaste demasiado.");
    }
}
else{

    let diferencia = numero_secreto - adivinar_numero;

    if(diferencia == 1){
        console.log("Muy cerca, Piensa un poco MÁS.");
    }
    else if(diferencia <= 3){
        console.log("Algo cerca, pero todavía falta un poco más.");
    }
    else{
        console.log("Muy lejos, te falta bastante.");
    }
}
intentos--;
console.log(`Te quedan ${intentos} intentos`);
}
if(intentos == 0){
    console.log(`Perdiste. El número secreto era ${numero_secreto}`);
}
}
opciones(ejercicio23);
