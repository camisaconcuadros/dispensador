

let cantidad_minima_Croquetas = 100;
let cantidad_Croquetas_a_servir = 50;
let cantidad_actual_croquetas = 80;

let hora_1 = '8:00';
let hora_2 = '13:00';
let hora_3 = '18:00';
let hora_actual = '13:00';

function Sirve_Comida() {
    if (cantidad_actual_croquetas < cantidad_minima_Croquetas){
        alert ('¡ Tu dispensador se ha llenado!');
    }    
}

function Recordatorio_comida(){
    if (hora_actual == hora_2){
        alert ('¡Es hora de alimentar al perro!');
    }
}



