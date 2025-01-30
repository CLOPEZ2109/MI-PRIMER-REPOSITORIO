
const pantalla = document.getElementById('pantalla');


function agregarAPantalla(valor) {
    pantalla.value += valor;
}


function limpiarPantalla() {
    pantalla.value = '';
}


function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}


function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
    }
}


document.addEventListener('keydown', (evento) => {
    const tecla = evento.key;
    

    if (tecla >= '0' && tecla <= '9' || tecla === '.' || tecla === '+' || 
        tecla === '-' || tecla === '*' || tecla === '/' || tecla === '(' || tecla === ')') {
        agregarAPantalla(tecla);
    } 

    else if (tecla === 'Enter') {
        calcular();
    } 

    else if (tecla === 'Escape') {
        limpiarPantalla();
    } 

    else if (tecla === 'Backspace') {
        borrarUltimo();
    }
});
