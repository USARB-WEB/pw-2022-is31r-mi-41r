const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

numbers.push(11);
console.log(numbers);

numbers.splice(2, 1);
console.log(numbers);

console.log(numbers.filter(element => element % 2 === 0));

console.log(numbers.map(element => element * element));

console.log(numbers.reduce((accumulator, element) => accumulator + element, 0));

const students = [
    {
        name: "Ion Creanga",
        average_mark: 9.99
    },
    {
        name: "Mihai Eminescu",
        average_mark: 9.97
    },
    {
        name: "Igor Dodon",
        average_mark: 1.99
    }
];

console.log(students);
console.log(students.filter(student => student.average_mark < 5));

const employees = [
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
];

console.log(employees);
console.log(employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0));
console.log(employees.map(employee => {
    return {
        name: employee.name,
        salary: employee.salary + 200
    }
}));

