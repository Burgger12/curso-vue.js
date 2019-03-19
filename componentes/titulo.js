Vue.component('titulo',{
    template:`      
    <div>
        <h1>Numero {{ $store.state.numero}}</h1>
        <hijo></hijo>
    </div>
    `
});