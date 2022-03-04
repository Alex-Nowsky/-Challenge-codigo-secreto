
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var botonEncriptar = document.getElementById("btn-encriptar");
var vocalesAEncriptar = ["e", "i", "a", "o", "u"];
var vocalesEncriptados = ["enter","imes","ai","ober","ufat"];
var palabraResultante = " ";
// Función que encripta
function encriptar() {
    
    var palabra = document.getElementById("input-texto").value;
    for(var j=0; j< palabra.length; j++) {
        var caracter = palabra.substring(j, j+1); //j será el caracter a elegir, j + 1 será el rango a elegir
       
        for(var i=0; i<= vocalesAEncriptar.length;i++){
            if(vocalesAEncriptar[i] == caracter) {
                palabraResultante = palabraResultante + caracter.replace(vocalesAEncriptar[i], vocalesEncriptados[i]);
                break;
            }
        }
        if(vocalesAEncriptar[i] != caracter){
            palabraResultante = palabraResultante + caracter;
        }
    }
   document.getElementById("msg").value = palabraResultante;	            
}
botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.getElementById("btn-desencriptar");

var vocalesEncriptadosVGlobal = [/enter/g,/imes/g, /ai/g, /ober/g, /ufat/g];
// Función que desencripta 

function desencriptar() {

    var palabra = document.getElementById("input-texto").value;
    for(var i=0; i<palabra.length; i++) {
        palabraResultante = palabra;
        for(var j=0; j<vocalesAEncriptar.length;j++) {
            palabraResultante = palabraResultante.replace(vocalesEncriptadosVGlobal[j], vocalesAEncriptar[j]);  
        }
    }
    document.getElementById("msg").value = palabraResultante;
}

botonDesencriptar.onclick = desencriptar;

var botonCopiar = document.getElementById("btn-copy");
botonCopiar.onclick = copyToClipBoard;
// copiar texto del input del resultado
function copyToClipBoard() {
    var copiarTexto = document.getElementById("msg");
    copiarTexto.select(); // selecciona el texto
    copiarTexto.onclick = document.execCommand('copy'); // lo copia
}
