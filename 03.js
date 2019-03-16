const app = new Vue({
    el: '#app',
    data:{
       titulo: 'GYM con Vue.js',
       tareas:[],
       nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                /*agrega los elemento al objeto */
                nombre: this.nuevaTarea,
                estado: false
            })
            /*guarda en el amacenamineto local */
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            this.nuevaTarea = '';
        },
        editarTarea(index){
            /*cambia el estado del .estado */
            this.tareas[index].estado = true;

            /*edita lo que tengo en local*/
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            /*elimina un item del array segun el index y la cantidad que quiero que elimina */
            this.tareas.splice(index, 1); 

            /*elimina la tarea en local */
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
         /*si no hay datos en el almacenamiento local return false */
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB ===  null){
            this.tareas = [];
        }
        else{
            this.tareas = datosDB;
        }
    }
  })