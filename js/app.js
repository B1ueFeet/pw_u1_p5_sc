console.log("elementos vue");
console.log(Vue);

/*  DECLARACION DE ARREGLOS */
const estudiantes = [
  { nombre: 'Serghy', apellido: 'Castillo' },
  { nombre: 'Edison', apellido: 'Manchego' },
  { nombre: 'Andrea', apellido: 'Mayorga' },
  { nombre: 'Emilia', apellido: 'Quevedo' },
  { nombre: 'Reymon', apellido: 'Hidalgo' }
]

console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({
  /*para que Vue reconozco el código javascript usamos las llaves en el lambda
  /*  template:`
    <h1>Hola Mundo</h1>
    <p>Desde App.js</p>
   
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{false? "verdadero ; 'falso'"}}</p>
    `
    */


  /*OPTIONS API */
  methods: {
    cambiarMensaje() {
      console.log("Se está cambiando el mensaje");
      console.log(this.mensaje);
      this.mensaje = "Valor cambiado: :)";
    },
    sumar() {
      console.log("Sumando...");
      console.log(this.valor);
      this.valor++;
    },
    agregarEstudiante(){
      console.log('Agregando Estudiante')
      /* PARA AGREGAR ELEMENTOS AL INICIO */
      this.lista.unshift({nombre: this.nombre, apellido: this.apellido})
      /* PARA AGREGAR ELEMENTOS AL FINAL
      this.lista.push({nombre: this.nombre, apellido: this.apellido}) */
      console.table(this.lista)
    },

    keyPress(event, id){
      console.log('presionando:')
      console.log(event.charCode)
      if(event.charCode === 13 ){
        this.agregarEstudiante()
      }
      
      
    }
  },


  watch: {},


  /*Controlamos el modelo con data; con sus Propiedades reactivas*/
  data() {
    return {
      mensaje:    "Hola mundo desde Vue.js",
      valor:      100,
      lista:      estudiantes,
      nombre:     null,
      apellido:   null
    };
  },
});
/* este es el Id para llamar en el html*/
app.mount("#myApp");
