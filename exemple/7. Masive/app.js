const number1 = 1;
const number2 = 2;
const number3 = 3;
const number4 = 4;
const number5 = 5;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    console.log(number);
}

for (const key in numbers) {
    if (Object.hasOwnProperty.call(numbers, key)) {
        console.log(numbers[key]);
    }
}

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

