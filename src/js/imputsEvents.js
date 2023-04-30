import {setVisibilidad} from './domUtility.js';

export const limpiarInput = (event, inputLimpiar) => {
    const input = document.getElementById(inputLimpiar);
    input.value="";
    event.preventDefault();
};

const isInputLimpiable =  (inputLimpiar) => {
    return inputLimpiar.value != "";
};