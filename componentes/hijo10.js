Vue.component('hijo',{
    template:`
    <div>
    <button class="btn btn-primary" @click="aumentar">+</button>
    <button class="btn btn-primary" @click="disminuir(2)">-</button>
    <h1>Numero {{ numero}}</h1>
        <br />
        <input type="text" class="form-control" v-model="$store.state.message">
    </div>      
    `,
    computed:{
        ...Vuex.mapState([
            'numero'
        ])
    },
    /*mapeo de mutaciones */
    methods:{
        ...Vuex.mapMutations([
            'aumentar',
            'disminuir'
        ])
    }
});
/*para llamar a una mutacion debo llamar primero un commit 
    y le paso como parametro el nombre de la funcion o mutacion */