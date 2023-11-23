function sumarNumeros(){
    var resultado = parseInt(document.getElementById('num_1').value)+ parseInt(document.getElementById('num_2').value)
    console.log('Funcion sumar /nResultado: ' + resultado)
    document.getElementById('resultado').innerText = resultado;
}

function restarNumeros(){
    var resultado = parseInt(document.getElementById('num_1').value) - parseInt(document.getElementById('num_2').value)
    console.log('Funcion Restar /nResultado: ' + resultado)
    document.getElementById('resultado').innerText = resultado;
}


function multiplicarNumeros(){
    var resultado = parseInt(document.getElementById('num_1').value) * parseInt(document.getElementById('num_2').value)
    console.log('Funcion Multiplicar /nResultado: ' + resultado)
    document.getElementById('resultado').innerText = resultado;
}

function dividirNumeros(){
    var resultado = parseInt(document.getElementById('num_1').value) / parseInt(document.getElementById('num_2').value)
    console.log('Funcion Dividir /nResultado: ' + resultado)
    document.getElementById('resultado').innerText = resultado;
}

function cambiarImagen(){
    document.getElementById('imagen').src = 'https://media.giphy.com/media/uq8GNnRxe7AlViDETx/giphy.gif'
}

