/* PROPIEDADES DE LAS CADENAS DE TEXTO

UNIVERSIDAD AUTONOMA DE NUEVO LEON
FACULTAD DE CIENCIAS FISICO MATEMATICAS
SEMESTRE AGOSTO - DICIEMBRE 2022 

JOSE LUIS HERNANDEZ MEZA - 1950471 */

var texto_1 = "Este es mi primer texto";

// Determinar tamño de la cadena
var TextSize = texto_1.length;

// Cortar la cadena de texto (desaparecer)
var TextCut_1 = texto_1.substring(3);

// Mostrar los caracteres deseados
var TextCut_2 = texto_1.substr(0, 5);

// Mostar la posicion de un caracter
var TextPos = texto_1.indexOf("a");

// Sustituir la cadena de texto
var TextReplace = texto_1.replace(texto_1, "Este es el nuevo texto");

// Cambiar cadena a maysuculas
var TextMays = texto_1.toUpperCase();

// Cambiar cadena a minusculas
var TextMin = texto_1.toLowerCase();
