//Deber IVAN GEOVANNY RODRÍGUEZ RON ING. SOFTWARE "B2"
const prompt = require('prompt-sync')();

//Auxiliares
function noSimbolos(texto) {
    let regla = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regla.test(texto);
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

function decimalAFraccion(decimal) {
    let numerador = parseInt(decimal.toFixed(2) * 100);
    let denominador = 100, resultado_fraccion = 0, fraccion_numerador = 0, fraccion_denominador = 0;

    for (let contador = numerador; contador >= 1; contador--) {
        if (numerador % contador === 0 && denominador % contador === 0) {
            fraccion_numerador = numerador / contador;
            fraccion_denominador = denominador / contador;
            break;
        }
    }

    resultado_fraccion = fraccion_numerador + "/" + fraccion_denominador;
    return resultado_fraccion;
}

function convertirAFraccion(resultado) {
    console.log(`Resultado: ${resultado}`);
    if (resultado % 1 !== 0) {
        let respuesta_fraccion = prompt("¿Desea verlo como fracción? (s/n): ");
        if (respuesta_fraccion.toLowerCase() === "s") {
            console.log(`Como fracción: ${decimalAFraccion(resultado)}`);
        }
    }
}

//1. Pedir el nombre del usuario y mostrar un saludo.
function pedirNombre() {
    console.log("EJERCICIO 1: Saludar");
    let nombre_usuario = prompt("Ingrese su nombre: ")

    if (nombre_usuario.trim() === "" || !isNaN(nombre_usuario)) {
        console.log("Error: El nombre no puede estar vacío, y solo puede contener letras.");
    } else if (!noSimbolos(nombre_usuario)) {
        console.log("Error: no debe tener simbolos");
    } else {
        console.log(`Bienvenido ${nombre_usuario}, saludos cordiales`);
    }
}
opciones(pedirNombre);

//2. Pedir dos números y mostrar su suma.
function ejercicio2() {
    console.log("\n EJERCICIO 2: Sumar dos números");
    let primer_numero = parseInt(prompt("Ingrese el primer número a sumar: "));
    let segundo_numero = parseInt(prompt("Ingrese el segundo número a sumar: "));

    if (isNaN(primer_numero) || isNaN(segundo_numero)) {
        console.log("Error, ingrese solo numeros");
    } else {
        let resultado_suma = primer_numero + segundo_numero;
        console.log(`El resultado de ${primer_numero} + ${segundo_numero} = ${resultado_suma}`);
    }
}
opciones(ejercicio2);

//3. Pedir un número y mostrar su doble y triple.
function ejercicio3() {
    console.log("\n EJERCICIO 3: Doble y Triple de un número");
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
function ejercicio4() {
    console.log("\n EJERCICIO 4: Calcular área");
    let base = parseFloat(prompt("Ingrese la base del rectángulo: "));
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));
    let área = 0
    if (isNaN(base) || isNaN(altura)) {
        console.log("Error, ingrese solo numeros");
    } else {
        área = base * altura;
        console.log(`El rectángulo con base ${base} y altura ${altura} tiene un área de ${área}`);
    }
}
opciones(ejercicio4);

//5. Convertir grados Celsius a Fahrenheit.
function ejercicio5() {
    console.log("\n EJERCICIO 5: Convertir grados Celsius a Fahrenheit.");
    let grados_celsius = parseFloat(prompt("Ingrese los grados Celsius: "));
    let grados_fahrenheit = 0
    if (isNaN(grados_celsius)) {
        console.log("Error: Por favor, ingrese un número válido.");
    } else {
        grados_fahrenheit = (grados_celsius * 1.8) + 32;
        console.log(`Los ${grados_celsius}°C equivalen a ${grados_fahrenheit.toFixed(2)}°F`);
    }
}
opciones(ejercicio5);

//6. Pedir edad y mostrar si es mayor de edad.
function ejercicio6() {
    console.log("\n EJERCICIO 6: Mayor de edad");
    let edad_usuario = parseInt(prompt("Ingrese su edad: "));

    if (isNaN(edad_usuario) || edad_usuario <= 0) {
        console.log("Ingrese una edad válida.");
    } else if (edad_usuario >= 18) {
        console.log(`Tiene ${edad_usuario} años, es mayor de edad.`);
    } else {
        console.log(`Tiene ${edad_usuario} años, es menor de edad.`);
    }
}
opciones(ejercicio6);

//7. Comparar dos números y mostrar cuál es mayor.
function ejercicio7() {
    console.log("\n EJERCICIO 7: Número mayor");
    let numero_uno = parseFloat(prompt("Ingrese primer número a comparar: "));
    let numero_dos = parseFloat(prompt("Ingrese segundo número a comparar: "));

    if (isNaN(numero_uno) || isNaN(numero_dos)) {
        console.log("Error, ingrese solo numeros");
    } else if (numero_uno > numero_dos) {
        console.log(`El primer número (${numero_uno}) es mayor que el (${numero_dos})`);
    } else if (numero_uno < numero_dos) {
        console.log(`El segundo número (${numero_dos}) es mayor que el primer número ${numero_uno}`);
    } else {
        console.log(`El primer número (${numero_uno}) es igual que el segundo número (${numero_dos})`);
    }
}
opciones(ejercicio7);

//8. Calcular el promedio de 3 notas.
function ejercicio8() {
    console.log("\n EJERCICIO 8: Promedio");
    let primera_nota = parseFloat(prompt("Ingrese la primera nota: "));
    let segunda_nota = parseFloat(prompt("Ingrese la segunda nota: "));
    let tercera_nota = parseFloat(prompt("Ingrese la tercera nota: "));
    let promedio_notas = 0
    if (isNaN(primera_nota) || isNaN(segunda_nota) || isNaN(tercera_nota)) {
        console.log("Error, ingrese solo numeros");
    } else {
        promedio_notas = (primera_nota + segunda_nota + tercera_nota) / 3;
        console.log(`El promedio de las notas es ${promedio_notas.toFixed(2)}`);
    }
}
opciones(ejercicio8);

//9. Determinar si un número es par o impar.
function ejercicio9() {
    console.log("\n EJERCICIO 9: Número Par o Impar");
    let par_impar = parseInt(prompt("Ingrese un número: "));

    if (isNaN(par_impar)) {
        console.log("Error, ingrese solo numeros");
    } else if (par_impar % 2 === 0) {
        console.log(`El número ${par_impar} es par`);
    } else {
        console.log(`El número ${par_impar} es impar`);
    }
}
opciones(ejercicio9);

//10. Determinar si un número es positivo, negativo o cero.
function ejercicio10() {
    console.log("\n EJERCICIO 10: Número es positivo, negativo o es cero");
    let valor_ingresado = parseFloat(prompt("Ingrese un número a identificar: "));

    if (isNaN(valor_ingresado)) {
        console.log("Error, ingrese solo numeros");
    } else if (valor_ingresado > 0) {
        console.log(`El número ${valor_ingresado} es positivo`);
    } else if (valor_ingresado < 0) {
        console.log(`El número ${valor_ingresado} es negativo`);
    } else {
        console.log(`El número es cero`);
    }
}
opciones(ejercicio10);

//11. Calcular descuento según monto de compra.
function ejercicio11() {
    console.log("\n EJERCICIO 11: Calcular");
    let monto_compra = parseFloat(prompt("Ingrese su monto de compra: "));
    let primer_descuento = 0, segundo_descuento = 0;

    if (isNaN(monto_compra)) {
        console.log("Error, ingrese solo numeros");
    } else if (monto_compra <= 100) {
        console.log(`Su monto de compra (${monto_compra}) no recibe descuento`);
    } else if (monto_compra > 100 && monto_compra < 150) {
        primer_descuento = (monto_compra * 0.10);
        console.log(`Su monto de compra (${monto_compra}) recibe descuento de 10% (${primer_descuento}$)`);
    } else {
        segundo_descuento = (monto_compra * 0.15);
        console.log(`Su monto de compra (${monto_compra}) recibe descuento de 15% (${segundo_descuento}$)`);
    }
}
opciones(ejercicio11);

//12. Solicite al usuario su edad, valide que la edad sea un número positivo y muestre la categoría.
function ejercicio12() {
    console.log("\n EJERCICIO 12: Categoria según edad");
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

//13. Defina un usuario y contraseña simulando los registros de una BD.
function ejercicio13() {
    console.log("\n EJERCICIO 13: Acceso concedido o denegado");
    const usuarioBD = "admin";
    const claveBD = "1234";
    let registro_usuario = prompt("Ingrese su nombre de usuario: ");
    let registro_clave = prompt("Ingrese su contraseña: ");

    if (registro_usuario.trim() === "" || registro_clave.trim() === "") {
        console.log("Error: El usuario o contraseña no pueden estar vacíos.");
    } else if (registro_usuario === usuarioBD && registro_clave === claveBD) {
        console.log("Acceso concedido: Bienvenido al sistema.");
    } else {
        console.log("Acceso denegado: Usuario o contraseña incorrectos.");
    }
}
opciones(ejercicio13);

//14. Presentar un Menú con opciones básicas.
function ejercicio14() {
    console.log("\n EJERCICIO 14: Menú de opciones");
    console.log("MENU");
    console.log("1. Saludar");
    console.log("2. Mostrar fecha");
    console.log("3. Mostrar mensaje motivacional");
    console.log("4. Salir");

    let opcion = parseInt(prompt("Elija una opción: "));
    let fecha_actual = 0
    switch (opcion) {
        case 1:
            pedirNombre();
            break;
        case 2:
            fecha_actual = new Date();
            console.log("La fecha actual es: " + fecha_actual.toLocaleDateString());
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
function ejercicio15() {
    console.log("\n EJERCICIO 15: Año bisiesto");
    let ingresar_año = parseInt(prompt("Ingrese un año para validar si es bisiesto o no: "));

    if (isNaN(ingresar_año)) {
        console.log("Error, ingrese solo años, no se permiten símbolos");
    } else if (ingresar_año % 4 === 0) {
        console.log(`El año ${ingresar_año} si es bisiesto`);
    } else {
        console.log(`El año ${ingresar_año} no es bisiesto`);
    }
}
opciones(ejercicio15);

//16. Calcular el mayor de 3 números.
function ejercicio16() {
    console.log("\n EJERCICIO 16: Mayor de 3 números");
    let primer_numero = parseFloat(prompt("Ingrese primer número a comparar: "));
    let segundo_numero = parseFloat(prompt("Ingrese segundo número a comparar: "));
    let tercer_numero = parseFloat(prompt("Ingrese tercer número a comparar: "));

    if (isNaN(primer_numero) || isNaN(segundo_numero) || isNaN(tercer_numero)) {
        console.log("Error, ingrese solo numeros y no dejar vacios");
    } else if (primer_numero > segundo_numero && primer_numero > tercer_numero) {
        console.log(`El primer número (${primer_numero}) es mayor que el segundo número (${segundo_numero}) y tambien que el tercer número (${tercer_numero})`);
    } else if (segundo_numero > primer_numero && segundo_numero > tercer_numero) {
        console.log(`El segundo número (${segundo_numero}) es mayor que el primer número (${primer_numero}) y tambien que el tercer número (${tercer_numero})`);
    } else if (tercer_numero > primer_numero && tercer_numero > segundo_numero) {
        console.log(`El tercer número (${tercer_numero}) es mayor que el primer número (${primer_numero}) y tambien que el segundo número (${segundo_numero})`);
    } else if (primer_numero === segundo_numero && segundo_numero === tercer_numero) {
        console.log(`El primer número (${primer_numero}) es igual que el segundo número (${segundo_numero}) y tambien que el tercer número (${tercer_numero})`);
    }
}
opciones(ejercicio16);

//17. Evaluar el rendimiento de estudiantes.
function ejercicio17() {
    console.log("\n EJERCICIO 17: Desempeño de estudiantes");
    let nota_estudiante = parseFloat(prompt("Ingrese la nota del estudiante (0 - 10): "));

    if (isNaN(nota_estudiante) || (nota_estudiante < 0) || (nota_estudiante > 10)) {
        console.log("Error, ingrese solo numeros, no dejar vacios y no pueden ser notas negativas o mayores a 10");
    } else if ((nota_estudiante >= 9) && (nota_estudiante <= 10)) {
        console.log(`La nota del estudiante es: ${nota_estudiante} = A (Excelente)`);
    } else if ((nota_estudiante >= 7) && (nota_estudiante <= 8)) {
        console.log(`La nota del estudiante es: ${nota_estudiante} = B (Bueno)`);
    } else if ((nota_estudiante >= 5) && (nota_estudiante <= 6)) {
        console.log(`La nota del estudiante es: ${nota_estudiante} = C (Regular)`);
    } else {
        console.log(`La nota del estudiante es: ${nota_estudiante} = D (Reprobado)`);
    }
}
opciones(ejercicio17);

//18. Usar operador ternario para validar acceso.
function ejercicio18() {
    console.log("\n EJERCICIO 18: Operador ternario, Validar acceso");
    const edad = parseInt(prompt("Ingrese su edad: "));

    if (isNaN(edad)) {
        console.log("Ingrese solo una edad valida, no dejar vacio.");
    } else {
        let acceso = edad >= 18 ? "PUEDES SUBIR" : "NO PUEDES SUBIR";
        console.log(acceso);
    }
}
opciones(ejercicio18);

//19. Mostrar números del 1 al 10 con for.
function ejercicio19() {
    console.log("\n EJERCICIO 19: Números del 1 al 10 con for");
    console.log("Numeros del 1 al 10:");
    for (let contador = 1; contador <= 10; contador++) {
        console.log(contador);
    }
}
opciones(ejercicio19);

//20. Sumar números hasta que el usuario ingrese 0 (while).
function ejercicio20() {
    console.log("\nEJERCICIO 20: Sumar números, ingresar 0 y termina la suma");
    let suma = 0;
    let numero = parseInt(prompt("Ingrese un número (0 para terminar): "));

    while (numero != 0) {
        if (isNaN(numero)) {
            console.log("Ingrese solo números, no dejar vacio, no usar simbolos.");
        } else {
            suma = suma + numero;
        }
        numero = parseInt(prompt("Ingrese otro numero (0 para terminar):"));
    }
    console.log("La suma total es:", suma);
}
ejercicio20();

//21. Tabla de multiplicar.
function ejercicio21() {
    console.log("\nEJERCICIO 21: Tabla de multiplicar de un número");
    let numero_ingresado = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));
    let cantidad_tabla = parseInt(prompt("Ingresar hasta que cantidad de la tabla de multiplicar desea (Máximo hasta 20): "));

    if (isNaN(numero_ingresado) || isNaN(cantidad_tabla)) {
        console.log("Ingrese solo números, no dejar vacio, no usar simbolos.");
    } else if (cantidad_tabla > 20) {
        console.log("Error, la cantidad de tabla de multiplicar como máximo es hasta el número 20");
    } else {
        for (let contador = 1; contador <= cantidad_tabla; contador++) {
            console.log(`${numero_ingresado} * ${contador} = ${numero_ingresado * contador}`);
        }
    }
}
opciones(ejercicio21);

//22. Ingresar valores a arreglos.
function ejercicio22() {
    console.log("\nEJERCICIO 22: Ingresar valores a arreglos");
    let longitud_arreglo = parseInt(prompt("Ingrese la longitud del arreglo: "));
    let arreglo = [];

    if (isNaN(longitud_arreglo) || longitud_arreglo <= 0) {
        console.log("Ingrese solo números, no dejar vacío, no usar símbolos.");
    } else {
        for (let posicion = 0; posicion < longitud_arreglo; posicion++) {
            let valor_dentro = parseInt(prompt(`Ingrese el valor para la posición N°${posicion}:`));
            if (isNaN(valor_dentro)) {
                console.log("Ingrese solo números.");
            } else {
                arreglo.push(valor_dentro);
            }
        }
        console.log(arreglo);
    }
}
ejercicio22();

//23. Adivinar número con intentos limitados.
const numero_secreto = 14;
let intentos = 3;
let diferencia;

while (intentos > 0) {
    let adivinar_numero = parseInt(prompt("Ingrese un número entre el 0-30: "));

    if (isNaN(adivinar_numero)) {
        console.log("Ingrese solo números, no dejar vacio, no usar simbolos");
    } else if ((adivinar_numero < 0 || adivinar_numero > 30)) {
        console.log("Ingrese un número entre 0 y 30");
    } else if (adivinar_numero == numero_secreto) {
        console.log("Felicidades, adivinaste el número");
        break;
    } else if (adivinar_numero > numero_secreto) {
        diferencia = adivinar_numero - numero_secreto;
        if (diferencia == 1) {
            console.log("Muy cerca, Piensa un poco MENOS");
        } else if (diferencia <= 3) {
            console.log("Algo cerca, pero todavía te pasaste");
        } else {
            console.log("Muy lejos, te pasaste demasiado");
        }
    } else {
        diferencia = numero_secreto - adivinar_numero;
        if (diferencia == 1) {
            console.log("Muy cerca, Piensa un poco MÁS");
        } else if (diferencia <= 3) {
            console.log("Algo cerca, pero todavía falta un poco más");
        } else {
            console.log("Muy lejos, te falta bastante");
        }
    }

    intentos--;
    console.log(`Te quedan ${intentos} intentos`);
}

if (intentos == 0) {
    console.log(`Perdiste. El número secreto era ${numero_secreto}`);
}

//24. Crear función para calcular promedio.
function ejercicio24() {
    console.log("\nEJERCICIO 24: Calcular promedio");
    let cantidad_notas = parseInt(prompt("Ingrese cuantas notas quiere ingresar "));
    let promedio = 0;
    let notas_estudiante = 0;

    if (isNaN(cantidad_notas) || cantidad_notas <= 0) {
        console.log("Ingrese solo números, no números negativos, no dejar vacío, no usar símbolos.");
    } else {
        for (let contador = 0; contador < cantidad_notas; contador++) {
            notas_estudiante = parseFloat(prompt(`Ingrese la nota N°${contador + 1}:`));
            if (isNaN(notas_estudiante) || notas_estudiante < 0) {
                console.log("Ingrese solo números, no números negativos, no dejar vacío, no usar símbolos.");
                contador--;
            } else {
                promedio = promedio + notas_estudiante;
            }
        }
        promedio = promedio / cantidad_notas;
        console.log(`El promedio de notas es ${promedio}`);
    }
}
ejercicio24();

//25. Función que determine si un número es primo.
function ejercicio25() {
    console.log("\n EJERCICIO 25");
    const numero_ingresado = parseInt(prompt("Ingrese número para determinar si es primo o no: "));

    if (isNaN(numero_ingresado)) {
        console.log("Error, ingrese solo números");
    } else {
        let divisores = 0;
        for (let contador = 1; contador <= numero_ingresado; contador++) {
            if (numero_ingresado % contador === 0) {
                divisores++;
            }
        }
        if (divisores === 2) {
            console.log(`El número ${numero_ingresado} SÍ es primo`);
        } else {
            console.log(`El número ${numero_ingresado} NO es primo`);
        }
    }
}
opciones(ejercicio25);

//26. Función recursiva para factorial.
function ejercicio26() {
    console.log("\n EJERCICIO 26");
    const numero_ingresado = parseInt(prompt("Ingrese un número para calcular su factorial: "));

    if (isNaN(numero_ingresado)) {
        console.log("Error, ingrese solo números");
    } else if (numero_ingresado < 0) {
        console.log("Error, no existen factoriales de números negativos");
    } else if (numero_ingresado === 0 || numero_ingresado === 1) {
        console.log(`El factorial de ${numero_ingresado} es: 1`);
    } else {
        let resultado = 1;
        for (let contador = 2; contador <= numero_ingresado; contador++) {
            resultado = resultado * contador;
        }
        console.log(`El factorial de ${numero_ingresado} es: ${resultado}`);
    }
}
opciones(ejercicio26);

//27. Calculadora
function ejercicio27() {
    console.log(" CALCULADORA");
    console.log("1.Suma ");
    console.log("2.Resta");
    console.log("3.Multiplicación");
    console.log("4.División");
    console.log("5.Potencia");
    console.log("6.Módulo");
    console.log("7.Porcentaje");
    console.log("8.Seno");
    console.log("9.Coseno");
    console.log("10.Tangente");

    let opcion = parseInt(prompt("Seleccione una opción (Escribir número): "));

    switch (opcion) {
        case 1: // Suma
            let cantidad_sumar = parseInt(prompt("¿Cuántos números desea sumar? (Máximo 10): "));
            let resultado_suma = 0;
            if (isNaN(cantidad_sumar) || cantidad_sumar <= 0 || cantidad_sumar > 10) {
                console.log("Cantidad inválida, no dejar vacío, no poner números negativos");
            } else {
                for (let contador = 0; contador < cantidad_sumar; contador++) {
                    let numero_sumar = parseFloat(prompt(`Ingrese el número N°${contador + 1}: `));
                    resultado_suma = resultado_suma + numero_sumar;
                }
                console.log(`La suma es: ${resultado_suma}`);
            }
            break;

        case 2: // Resta
            let cantidad_restar = parseInt(prompt("¿Cuántos números desea restar? (Máximo 10): "));
            let resultado_resta;
            if (isNaN(cantidad_restar) || cantidad_restar <= 0 || cantidad_restar > 10) {
                console.log("Cantidad inválida, no dejar vacío, no poner números negativos");
            } else {
                for (let contador = 0; contador < cantidad_restar; contador++) {
                    let numero_restar = parseFloat(prompt(`Ingrese el número N°${contador + 1}: `));
                    if (contador === 0) {
                        resultado_resta = numero_restar;
                    } else {
                        resultado_resta = resultado_resta - numero_restar;
                    }
                }
                console.log(`La resta es: ${resultado_resta}`);
            }
            break;

        case 3: // Multiplicación
            let cantidad_multiplicar = parseInt(prompt("¿Cuántos números desea multiplicar? (Máximo 10): "));
            let resultado_multiplicacion = 1;
            let numero_multiplicar;
            if (isNaN(cantidad_multiplicar) || cantidad_multiplicar <= 0 || cantidad_multiplicar > 10) {
                console.log("Cantidad inválida, no dejar vacío, no poner números negativos");
            } else {
                for (let contador = 0; contador < cantidad_multiplicar; contador++) {
                    numero_multiplicar = parseFloat(prompt(`Ingrese el número N°${contador + 1}: `));
                    resultado_multiplicacion = resultado_multiplicacion * numero_multiplicar;
                }
                console.log(`La multiplicación es: ${resultado_multiplicacion}`);
            }
            break;

        case 4: // División
            let cantidad_dividir = parseInt(prompt("¿Cuántos números desea dividir? (Máximo 10): "));
            let resultado_division;
            if (isNaN(cantidad_dividir) || cantidad_dividir <= 0 || cantidad_dividir > 10) {
                console.log("Cantidad inválida, no dejar vacío, no poner números negativos");
            } else {
                for (let contador = 0; contador < cantidad_dividir; contador++) {
                    let numero_dividir = parseFloat(prompt(`Ingrese el número N°${contador + 1}: `));
                    if (contador === 0) {
                        resultado_division = numero_dividir;
                    } else {
                        if (numero_dividir === 0) {
                            console.log("Error: no se puede dividir entre 0");
                            break;
                        }
                        resultado_division = resultado_division / numero_dividir;
                    }
                }
                convertirAFraccion(resultado_division);
            }
            break;

        case 5: // Potencia
            let base = parseFloat(prompt("Ingrese la base: "));
            let exponente = parseFloat(prompt("Ingrese el exponente: "));
            let resultado_potencia;
            if (isNaN(base) || isNaN(exponente)) {
                console.log("Error: ingrese solo números");
            } else {
                resultado_potencia = Math.pow(base, exponente);
                convertirAFraccion(resultado_potencia);
            }
            break;

        case 6: // Módulo
            let numero_modulo = parseFloat(prompt("Ingrese el número: "));
            let divisor_modulo = parseFloat(prompt("Ingrese el divisor: "));
            let resultado_modulo = 0;
            if (isNaN(numero_modulo) || isNaN(divisor_modulo)) {
                console.log("Error: ingrese solo números");
            } else if (divisor_modulo === 0) {
                console.log("Error: no se puede dividir entre 0");
            } else {
                resultado_modulo = numero_modulo % divisor_modulo;
                console.log(`El resultado es ${resultado_modulo}`);
            }
            break;

        case 7: // Porcentaje
            let num_porcentaje = parseFloat(prompt("Ingrese el número: "));
            let porciento = parseFloat(prompt("¿Qué porcentaje desea calcular?: "));
            let resultado_porcentaje = 0;
            if (isNaN(num_porcentaje) || isNaN(porciento)) {
                console.log("Error: ingrese solo números");
            } else {
                resultado_porcentaje = (num_porcentaje * porciento) / 100;
                convertirAFraccion(resultado_porcentaje);
            }
            break;

        case 8: // Seno
            let angulo_seno = parseFloat(prompt("Ingrese el ángulo en grados: "));
            let resultado_seno = 0;
            if (isNaN(angulo_seno)) {
                console.log("Error: ingrese solo números");
            } else {
                resultado_seno = Math.sin(angulo_seno * (Math.PI / 180));
                convertirAFraccion(resultado_seno);
            }
            break;

        case 9: // Coseno
            let angulo_coseno = parseFloat(prompt("Ingrese el ángulo en grados: "));
            let resultado_coseno = 0;
            if (isNaN(angulo_coseno)) {
                console.log("Error: ingrese solo números");
            } else {
                resultado_coseno = Math.cos(angulo_coseno * (Math.PI / 180));
                convertirAFraccion(resultado_coseno);
            }
            break;

        case 10: // Tangente
            let angulo_tangente = parseFloat(prompt("Ingrese el ángulo en grados: "));
            let resultado_tangente = 0;
            if (isNaN(angulo_tangente)) {
                console.log("Error: ingrese solo números");
            } else if (angulo_tangente === 90 || angulo_tangente === 270) {
                console.log("Error: la tangente no existe en ese ángulo");
            } else {
                resultado_tangente = Math.tan(angulo_tangente * (Math.PI / 180));
                convertirAFraccion(resultado_tangente);
            }
            break;

        default:
            console.log("Opción no válida");
    }
}
opciones(ejercicio27);
