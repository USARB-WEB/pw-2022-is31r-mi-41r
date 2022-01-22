const app = new Vue({
    el: '#app',
    data: {
        todoList: [],
        newTodo: ""
    },
    created() {
        this.todoList = JSON.parse(localStorage.getItem("todoList"));
    },
    methods: {
        addNewTodo(){
            this.todoList.push(this.newTodo);
            this.newTodo = "";
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },
        removeTodo(todoIndex){
            this.todoList.splice(todoIndex, 1);
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        }
    }
})