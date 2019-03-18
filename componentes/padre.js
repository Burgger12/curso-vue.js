//los props nos permite hacer comunicacion entre componentes
//
/* para pasar un dato propio de este componente, demas de nombre="valor", podemos usar
    :nombre="valorPadre";
    si numeroPadre cambia, tambien cambia en el hijo(si lo estoy pasando)
*/
Vue.component('padre',{
    template:`
        <div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}}</h2>
            <button class="btn btn-warning" @click="numeroPadre++"> + </button> 
            <hijo :numero="numeroPadre"></hijo> 
        </div>
    `,
    data(){
        return{
            numeroPadre: 0   
        }
    }
});