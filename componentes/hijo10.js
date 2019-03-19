Vue.component('hijo',{
    template:`
    <div>
        <button class="btn btn-primary" @click="$store.commit('aumentar')">+</button>
        <h1>Numero {{ $store.state.numero}}</h1>
        
    </div>      
    `
});
/*para llamar a una mutacion debo llamar primero un commit 
    y le paso como parametro el nombre de la funcion o mutacion */