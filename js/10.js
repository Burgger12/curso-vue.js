//tienda de datos, que sera guardada dentro de app
const store = new Vuex.Store({
    //creamos un estado
    state:{
        numero: 10,
        message: '',
        cursos:[] /*se lelnara con el JSON */
    },/*creamos una mutacion que son funciones */
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state,n){
            state.numero -= n
        },
        llenarCursos(state,cursosAccion){
            state.cursos = cursosAccion
        }
    },
    actions:{
        /*funciones */
        obtenerCursos: async function({ commit }){ /*el async debe ir siempre antes de function */
            /*obtengo datos del JSON */
            const dato = await fetch('js/cursos.json'); /*para poder trabajar con el await debe esta dentro del async */
            /*me pare en el html !importante */
            const cursos = await dato.json(); /* llena la variable cursos con lo que continene el JSON */
            commit('llenarCursos',cursos); /*llamo a la mutacion  llenarCursos y le paso los cursos */
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