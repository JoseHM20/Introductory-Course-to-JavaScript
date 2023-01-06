/* ARREGLOS

UNIVERSIDAD AUTONOMA DE NUEVO LEON
FACULTAD DE CIENCIAS FISICO MATEMATICAS
SEMESTRE AGOSTO - DICIEMBRE 2022 

JOSE LUIS HERNANDEZ MEZA - 1950471 */

// Crear arreglo
var amigos = ["Carlos", "Maria", "Luis", "Mauricio"];
var amigos2 = ["Esteban", "Gerson", "Gerardo", "Liz"];

// Sustituir elementos de un arreglo
amigos[0] = "Carolina";

// Numero total de elementos
document.write(amigos.length());

// Agregar elementos a final dal arreglo
amigos.push("Fernanda");

// Eliminar el ultimo elemento de un arreglo
amigos.pop();

// Concatenar arreglos
var amigos3 = amigos.concat(amigos2);

// Dividir elementos de un arreglo
amigos.join(" : ");
