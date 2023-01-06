/* VARIABLES SCOPE

UNIVERSIDAD AUTONOMA DE NUEVO LEON
FACULTAD DE CIENCIAS FISICO MATEMATICAS
SEMESTRE AGOSTO - DICIEMBRE 2022 

JOSE LUIS HERNANDEZ MEZA - 1950471 */

// Ejemplo 1 - Variable Global
var Variable_Global = "Esta es una variable global";

function VariableGlobal(){
    alert(Variable_Global);

    var Variable_Global = "Esta es la variable global modificada";
    alert(Variable_Global);
}

// Ejemplo 2 - Variable Local
function VariableLocal(){
    var Variable_Local = "Rsta es una variable local";

    /* Si queremos convertir una variable local en global, debemos quitar var
    Variable_Local = "Rsta es una variable local";*/

    alert(Variable_Local);
}

/* Esto mostrara un error por ser una variable que
solo se puede consultar dentro de una funcion
alert(Variable_Local) */

// Scope funciona por niveles, por lo que a continuacion mostramos un ejemplo //
function funcion_1(){
    var Var_Local = "Esta es la variable local 1"

    function funcion_2(){
        var Var_Local = "Esta es la variable local 2"

        function funcion_3(){
            // var Var_Local = "Esta es la variable local 3"
            document.write(Var_Local)
        }
    }
}
/* Podemos notar que si comentamos la variable local de la funcion 3
Scope se encargara de buscar en la siguiente funcion la variable local */