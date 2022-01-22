const app = new Vue({
    el: '#app',
    data: {
        todoList: [
            "Learn JS",
            "To learn VueJS"
        ],
        newTodo: ""
    },
    methods: {
        addNewTodo(){
            this.todoList.push(this.newTodo);
            this.newTodo = "";
        }
    }
})