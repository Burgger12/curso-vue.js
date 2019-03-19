Vue.component('titulo',{
    template:`      
    <div>
        <h1>Numero {{numero}}</h1> 

        text:<h3>{{$store.state.message}}</h3>
        <br />
        <hijo></hijo>
    </div>
    `,
    computed:{
        /* mapeamos el state */
       ...Vuex.mapState([
            'numero'
       ])
    }
});
/*  $store.state.numero asi solo se usa en el templete, si lo llamo desde una funcion va sin $
        numero(){
            return  store.state.numero;
        }    
MapState
*/ 