let time = prompt('Bведите время');

switch (true) {
    case time >= 0 && time <= 6 :
        alert (time + ' часа ночи');
        break;
        case time >= 7 && time <= 10 :
            alert(time + ' часов утра');
            break;
            case time >= 11 && time <= 17 :
                alert(time - 12 + ' часа дня');
                break;
                case time >= 18 && time <= 23 :
                    alert(time - 12 + ' часов вечера');
                    break;
    default:
        alert("Некорректное время");


}
console.log('Ваше время ' + time);