var app = new Vue({
    el: '#app',
    data: {
      message: 'Hola mundo con vue',
      frutas: ['Manzana','Pera','Naranja'],
      fruts:[
          {nombre:'Pera', cantidad:10},
          {nombre:'Manzana', cantidad:0},
          {nombre:'Naranja', cantidad:23}
      ],
      nuevaFruta:''
    },
    //metodos 
    methods:{
      agregarFruta (){
        this.fruts.push({
          nombre: this.nuevaFruta,
          cantidad: 0
        })
      }
    }
  })