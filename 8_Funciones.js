/* FUNCIONES

UNIVERSIDAD AUTONOMA DE NUEVO LEON
FACULTAD DE CIENCIAS FISICO MATEMATICAS
SEMESTRE AGOSTO - DICIEMBRE 2022 

JOSE LUIS HERNANDEZ MEZA - 1950471 */

// Ejemplo 1
function saludo(nombre){
    document.write("Bienvenido " + nombre + " a este sitio web")
}

saludo("Jose Luis")

// Ejemplo 2
function suma(num_1, num_2){
    var numero_1 = num_1;
    var numero_2 = num_2;

    return numero_1 + numero_2;
}

var a;
a = prompt("Ingresa el numero 1: ");

var b;
b = prompt("Ingresa el numero 2: ");

document.write("La suma obtenida es: " + suma(a, b));