// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista
import { creaImagen,creaParrafo,creaLista,creaTabla} from "./funciones.js";
// Variables para guardar la zona y la entrada
let zona = '';
let entrada = '';

// Esta función guarda la zona seleccionada
function seleZona() {
    // Selecciona la zona del select elegir zona y lo guarda
     zona= document.querySelector("#zona").value;
     console.log(zona);
    // Si hay entrada, habilito el botón aplicar
    if(entrada!=''){
        document.querySelector("#aplicar").disabled=false;
    }
    
}

// Esta función guarda la entrada seleccionada
function seleInput() {
    // Selecciona la entrada del select elegir entrada y la guarda
    entrada = document.querySelector("#entrada").value;
    console.log(entrada);
    // Si hay zona elegida, hablitar el botón aplicar
    if(zona!=''){
        document.querySelector("#aplicar").disabled=false;
    }
    
}

/* La función enviar llama a la función importada según 
la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {
    // Limpiar la zona seleccionada (para que no se coloquen más de una entrada en la zona)
    switch(zona){
        case 'A':
            let A = document.querySelector('#A');
            A.innerHTML='';
        break;
        case 'B':
            let B = document.querySelector('#B');
            B.innerHTML='';
        break;
        case 'C':
            let C = document.querySelector('#C');
            C.innerHTML='';
        break;
        case 'D':
            let D = document.querySelector('#D');
            D.innerHTML='';
        break;
    }
    /* comprueba cual es la zona seleccionada y ejecuta la función de creación
    correspondiente (switch)*/
   switch(entrada){
    case 'img':
        document.querySelector(`#${zona}`).appendChild(creaImagen());
        break;
    case 'table':
        document.querySelector(`#${zona}`).appendChild(creaTabla());
        break;
    case 'list': 
    document.querySelector(`#${zona}`).appendChild(creaLista());
    break;
    case 'p':
        document.querySelector(`#${zona}`).appendChild(creaParrafo());
        break;
   }
    
}

function limpiar(){
    document.querySelector('#A').innerHTML='';
    document.querySelector('#A').innerHTML='';
    document.querySelector('#A').innerHTML='';
    document.querySelector('#A').innerHTML='';
}

// Asignación de funciones al objeto window
window.seleInput = seleInput;
window.seleZona=seleZona;
window.enviar=enviar;
window.limpiar=limpiar;