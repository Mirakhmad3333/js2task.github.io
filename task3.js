let num1 = parseInt(prompt('Введите первое число '));
let num2 = parseInt(prompt('Введите второе число '));
let num3 = parseInt(prompt('Введите третье число '));

let min = Math.min(num1, num2, num3);
let max = Math.max(num1, num2, num3);

let middle;

if (num1 !== min && num1 !== max) {
    middle = num1;
}
else if (num2 !== min && num2 !== max) {
    middle = num2;
}
else {
    middle = num3;
}
alert('Среднее число ' + middle);
console.log('Среднее число ' + middle);
