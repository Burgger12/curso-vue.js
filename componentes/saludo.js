/* declaracion de componente, cada componente debe de estar dentro del #app */
Vue.component('saludo',{ 
    /*con comillas simple solo se puede escribir en una linea, con comillas invertidas se puede escribir en varias lineas */
    /** si tenemos varios elementos debe de esta contenido con un div */
    template:` 
        <div>
            <h1>{{saludo}}</h1>
            <h3>hi</h3>
        </div>
    `,
    data(){
        return{
            saludo: 'hola desde el componente de vue'
        }
    }
});