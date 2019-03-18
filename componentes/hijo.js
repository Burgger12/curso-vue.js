Vue.component('hijo',{
    template: `
        <div class="py-5 bg-success">
            <h4>Componente hijo: {{numero}}</h4>

            <h4>nombre: {{nombre}}</h4>

            <button @click="numero++">+</button>
        </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre:'Agustin'
        }
    },
    mounted(){
        /*cuando ya esta cargado lo envia al componente padre  */
        this.$emit('nombreHijo', this.nombre);
    }
});
/* comunicacion hijo padre */