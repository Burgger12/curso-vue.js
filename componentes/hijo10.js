Vue.component('hijo',{
    template:`
    <div>
    <button class="btn btn-primary" @click="aumentar">+</button>
    <button class="btn btn-primary" @click="disminuir(2)">-</button>
    <button class="btn btn-primary" @click="obtenerCursos">Obtener cursos</button>
    <h1>Numero {{ numero}}</h1>
        <br />
        <input type="text" class="form-control" v-model="$store.state.message">

        <hr>
        <h3>Cursos</h3>
        <ul >
            <li v-for="item in cursos">
                {{item.nombre}}
            </li>
        </ul>
    </div>      
    `,
    computed:{
        ...Vuex.mapState([
            'numero',
            'cursos'
        ])
    },
    /*mapeo de mutaciones */
    methods:{
        ...Vuex.mapMutations([
            'aumentar',
            'disminuir',
        ]),
        //mapeo los actions
        ...Vuex.mapActions([
            'obtenerCursos'          
        ])
    }
    
});
/*para llamar a una mutacion debo llamar primero un commit 
    y le paso como parametro el nombre de la funcion o mutacion */