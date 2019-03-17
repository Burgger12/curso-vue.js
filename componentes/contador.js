Vue.component('contador',{
    template:`
      <div class="mt-3">
        <h3>{{numero}}</h3>
        <button @click="numero++" class="btn btn-danger">+</button>
      </div> 
    `,
    data(){
        return {
            numero: 0
        }
    }
})