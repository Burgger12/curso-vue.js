const app = new Vue({
    el:'#app',
    data:{
        mensaje: 'Hola soy vue',
        contador: 0
    },
    methods:{
        
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
            /*  split separa
                reverse da vuelta lo que separe
                join lo vuelve a unir
            */
        },
        color(){
            return{
                'bg-success' : this.contador <= 25,
                'bg-warning' : this.contador >25 && this.contador < 50,
                'bg-danger' : this.contador >= 50
            }
        }
    }
})