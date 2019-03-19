Vue.component('hijo',{
    template:`
    <div>
        <button class="btn btn-primary" @click="$store.commit('aumentar')">+</button>
        <h1>Numero {{ numero}}</h1>
        <br />
        <input type="text" class="form-control" v-model="$store.state.message">
    </div>      
    `,
    computed:{
        ...Vuex.mapState([
            'numero'
        ])
    }
});
/*para llamar a una mutacion debo llamar primero un commit 
    y le paso como parametro el nombre de la funcion o mutacion */