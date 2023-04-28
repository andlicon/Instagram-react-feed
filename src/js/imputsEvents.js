import {setVisibilidad} from './domUtility.js';

export const limpiarInput = (event, inputLimpiar) => {
    const input = document.getElementById(inputLimpiar);
    input.value="";
    setVisibilidad(event.target, false);
    event.preventDefault();
};

const isInputLimpiable =  (inputLimpiar) => {
    return inputLimpiar.value != "";
};

export const mostrarBorrador = ({target}) => {
    const botonBorrar = target.nextElementSibling;

    if(isInputLimpiable(target)) {
        setVisibilidad(botonBorrar, true);
    }
    else {
        setVisibilidad(botonBorrar, false);
    }
};