const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        a: 2,
        b: 2
    },
    computed: {
        sum(){
            return Number(this.a) + Number(this.b)
        }
    }
})