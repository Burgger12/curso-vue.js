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
            {{nombrePadre}}
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo> 
        </div>
    `,
    data(){
        return{
            numeroPadre: 0, 
            nombrePadre:''
        }
    }
});

/*comunicacion de hijo a padre*/
/*<hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo> 
    @nombreHijo es nombre del evento, nombrePadre va a ser igual al $evento de nombreHijo
    la v. antigua
*/