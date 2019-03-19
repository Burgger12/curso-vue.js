const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Soy ciclo de vida de vue'
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        //al crear los metodos, observadores y eventos, pero aun no accede al DOM
        // aun no se puede acceder a 'el'
        console.log('Create');
    },
    beforeMount(){
        //se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted(){
        //se ejecuta al insertar el DOM
        console.log('Mounted');
    },
    beforeUpdate(){
        //al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        //al realizar los cambios
        console.log('Updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },
    methods:{
        Destruir(){
            this.$destroy();
        }
    }

})