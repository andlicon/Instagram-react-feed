export const limpiarInput = (event, inputLimpiar) => {
    const input = document.getElementById(inputLimpiar);
    input.value="";
    event.preventDefault();
};