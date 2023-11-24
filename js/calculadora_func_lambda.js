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
    console.log('Elemento 0:  ' + diasSemana[0]);
    diasSemana[5] = 'Sabado'
    diasSemana.push('Domingo');
    console.log('arreglo Strings:  ' + diasSemana);
    diasSemana.unshift('feriado');
    console.log('arreglo Strings:  ' + diasSemana);

    const numeros_2 = [7,8,9];
    const concatenado = numeros.concat(numeros_2)

    for ( const dia of diasSemana){
        
        if(dia === 'Martes'){
            console.log('Martes dos por uno')
        }else{
            console.log(dia)
        }
    }

    //DECLARACION DE OBJETOS

    const estudiante = {
        nombre :    'Serghy',
        apellido :  'Castillo',
        edad :      25,
        genero :    'M',
        ciudad :    'Quito' 
    };
    console.log('esto es un Objeto: ');
    console.log(estudiante)
    console.log('esto es un atributo de un Objeto: ' + estudiante.nombre);
    estudiante.nombre = 'Omar';
    console.log('esto es un atributo de un Objeto: ' + estudiante.nombre);
    

    const persona = {
        nombre :    'Serghy',
        apellido :  'Castillo',
        edad :      25,
        direccion:  {
            callePrincipal:     'Hurtado de Mendoza',
            calleSecundaria:    'Kiruba',
            numeracion:         'Oe4-67',
            barrio:             'Quito Sur'
        },
    };
    console.log(persona)
    console.log(persona.direccion)
    persona.direccion.numeracion = 'Oe4-66'
    console.log(persona.direccion)

    //  ARREGLO DE CUATRO PACIENTES QUE TENGAN 3 ATRIBUTOS
    const pacientes =[
        {
            nombre: 'Pedro',
            apellido: 'Vargas',
            barrio: 'Quito Sur'
        },
        {
            nombre: 'Alejandro',
            apellido: 'Macias',
            barrio: 'Alameda'
        },
        {
            nombre: 'Marcela',
            apellido: 'Alban',
            barrio: 'Nueva Aurora'
        },
        {
            nombre: 'Vinicio',
            apellido: 'Montenegro',
            barrio: 'BarrioNuevo'
        }
    ];
    console.table(pacientes);
    console.log(pacientes[0].nombre)
    console.log(pacientes.pop())
    console.table(pacientes);

    // DESESTRUCTURACION DE UN ARREGLO

    // const nuevosDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    // const [a,b,c,d,e] = nuevosDias
    // console.log(a)
    // console.log(e)

    const [a,b,c,d,e] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(a)
    console.log(e)

    // DESESTRUCTURACION DE OBJETOS
    const vehiculo ={
        marca:'Toyota',
        modelo:'Prius',
        anio:2023
    };
    const {marca,modelo,anio} = vehiculo;
    console.log(marca)
    console.log(anio)

    // EN UNA SOLA LINEA DECLARAR EL ONJETO CON 3 ATRIBUTOS CON OTRO ONJETO CON 
    // 3 ATRIBUTOS  Y DESESTRUCTURAR A AMBOS OBJETOS

    const alimento ={
        nombre:     'banana',
        tipo:       'Fruta',
        valorNutricional: {
            calorias:   20,
            vitamina:   'B2',
            proteinas:  1.2,
        }
    }
    const {nombre, tipo, valorNutricional: {calorias,vitamina,proteinas}} = { nombre:'banana', tipo:'Fruta',valorNutricional:{calorias:20,vitamina:'B2',proteinas:1.2}};
    console.log(proteinas)
}