const app = new Vue({
    el: '#app',
    data: {
        employees: [
            {
                name: "Ion Creanga",
                salary: 9999
            },
            {
                name: "Mihai Eminescu",
                salary: 8888
            },
            {
                name: "Igor Dodon",
                salary: 100000000
            }
        ]
    },
    computed: {
        totalSalary(){
            return this.employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
        }
    }
})