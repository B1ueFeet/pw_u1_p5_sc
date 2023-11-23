const sumar = () => {    
    var resultado = parsear('num_1')+ parsear('num_2')
    console.log('Funcion sumar /nResultado: ' + resultado)
    mostrar(resultado)
    };

const restar = () => {    
    var resultado = parsear('num_1') - parsear('num_2')    
    console.log('Funcion Restar /nResultado: ' + resultado)
    mostrar(resultado)
};

const multiplicar = () => {    
    if (isNaN(document.getElementById('num_1').value)){
        console.log('Esta Vacio')
    }
    var resultado = parsear('num_1') * parsear('num_2')
    console.log('Funcion Multiplicar /nResultado: ' + resultado)
    mostrar(resultado)
};

const dividir = () => {    
    var resultado = parsear('num_1') / parsear('num_2')
    console.log('Funcion Dividir /nResultado: ' + resultado)
    mostrar(resultado)
};

const cambiarImagen = () =>     document.getElementById('imagen').src = 'https://media.giphy.com/media/uq8GNnRxe7AlViDETx/giphy.gif'

const parsear = (id) => parseInt(document.getElementById(id).value);

const mostrar = (resultado) => document.getElementById('resultado').innerText = resultado;


function testearConceptos(){
    // TIPOS DE VARIABLES
    let var1 = 10;
    let var2 = 'TEXTO LET';
    console.log('numero:    ' + var1 + '\ntexto:    ' + var2);

    var var3 = 10;
    var var4 = 'TEXTO VAR';
    console.log('numero:    ' + var3 + '\ntexto:    ' + var4);

    const const1 = 10;
    const const2 = 'TEXTO CONST';
    console.log('numero:    '+ const1 + '\ntexto:   ' + const2);

    // ARREGLOS
    const numeros = [1, 2, 3, 4, 5.5, 6];
    console.log('arreglo Numerico:  ' + numeros);
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log('arreglo Strings:  ' + diasSemana);
}