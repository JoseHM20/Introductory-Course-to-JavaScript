/* EVITAR MODIFICACION DE VARIABLES

UNIVERSIDAD AUTONOMA DE NUEVO LEON
FACULTAD DE CIENCIAS FISICO MATEMATICAS
SEMESTRE AGOSTO - DICIEMBRE 2022 

JOSE LUIS HERNANDEZ MEZA - 1950471 */

// Crear funcion principal o autoinvocable
// Reutilizando codigo del ejemplo 9
(function main(){
    var Variable_Global = "Esta es una variable global";
    
    function VariableGlobal(){
        alert(Variable_Global);
        
        var Variable_Global = "Esta es la variable global modificada";
        alert(Variable_Global);
    }

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
}())