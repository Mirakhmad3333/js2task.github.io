let userAge = prompt('Bведите свой возраст');
console.log('Ваш возраст ' + userAge);

if (userAge <= 18 ) {
    alert ('Bы слишком молоды, Вам нужно учиться!');
}

else if (userAge <= 50 ) {
    alert ('Вам нужно ещё работать!');

}
else if (userAge <= 59 ) {
    alert ('Вам скоро на пенсию!');

}
else if (userAge <= 100) {
    alert ('Вы пенсионер!');
}
else {
    alert ('Что-то пошло не так введите возраст от 0 до 100!');
}