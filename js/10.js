//tienda de datos, que sera guardada dentro de app
const store = new Vuex.Store({
    //creamos un estado
    state:{
        numero: 10,
        message: ''
    },/*creamos una mutacion que son funciones */
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state,n){
            state.numero -= n
        }
    }
});
const app = new Vue({
    el:'#app',
    store,
    data:{
    },
    computed:{
    }
});