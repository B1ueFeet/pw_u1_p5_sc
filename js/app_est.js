console.log("elementos vue");
console.log(Vue);

/*  DECLARACION DE ESTUDIANTES */
const estudiantes = [
  { nombre: 'Serghy', apellido: 'Castillo', edad: 20 },
  { nombre: 'Edison', apellido: 'Manchego', edad: 20 },
  { nombre: 'Andrea', apellido: 'Mayorga', edad: 20 },
  { nombre: 'Emilia', apellido: 'Quevedo', edad: 20 },
  { nombre: 'Reymon', apellido: 'Hidalgo', edad: 20 }
]
console.table(estudiantes)

const app = Vue.createApp({

  /*OPTIONS API */
  methods: {
    agregarEstudiante(){
      console.log('Agregando Estudiante')
      /* PARA AGREGAR ELEMENTOS AL INICIO */
      /* this.lista.unshift({nombre: this.nombre, apellido: this.apellido}) */
      /* PARA AGREGAR ELEMENTOS AL FINAL*/
      this.lista.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad}) 
      console.log(this.nombre)
    },
  },


  watch: {},


  data() {
    return {
      lista:      estudiantes,
      nombre:     undefined,
      apellido:   undefined,
      edad:       undefined
    };
  },
});
app.mount("#myForm");
