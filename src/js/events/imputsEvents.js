export const limpiarInput = (event, inputLimpiar) => {
    const input = document.getElementById(inputLimpiar);
    input.value="";
    event.preventDefault();
};

const isInputLimpiable =  (inputLimpiar) => {
    return inputLimpiar.value != "";
};

export const mostrarBorrador = ({target}) => {
    if(isInputLimpiable(target)) {
        target.nextElementSibling.classList.add('close-button--visible');
    }
    else {
        target.nextElementSibling.classList.remove('close-button--visible');
    }
};