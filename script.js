//Код, який виводить повідомлення з урахуванням розділення повідомлення на 2 частини (більш логічно)
let birthYear = prompt("Введіть рік народження");
let age = 0;
let currentYear = new Date();
currentYear = currentYear.getFullYear();

if (!birthYear){
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
    age = "-";
}
else {
    while(birthYear > currentYear){
        birthYear = Number(prompt("Введіть правильно рік народження"));
    }
    age = currentYear - Number(birthYear);
}

let city = prompt("В якому місті ви живете?");
if (!city){
    alert("Шкода, що Ви не захотіли ввести своє місто");
    city = "-";
}
switch(city) {
    case 'Київ':
        alert(`Ваш вік ${age}. Ти живеш у столиці України`)
        break;
    case 'Лондон':
        alert(`Ваш вік ${age}. Ти живеш у столиці Великобританії`)
        break;
    case 'Вашингтон':
        alert(`Ваш вік ${age}. Ти живеш у столиці США`)
        break;
    default:
        alert(`Ваш вік ${age}. Ти живеш у місті ${city}`);
        break;
}

let sport = prompt("Який ваш улюблений вид спорту?");
if(!sport){
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
}

switch(sport.toLowerCase()){
    case "футбол":
        alert("Круто! Хочеш стати Ліонелем Мессі?");
        break;
    case "волейбол":
        alert("Круто! Хочеш стати Джордан Ларсон?");
        break;
    case "плавання":
        alert("Круто! Хочеш стати Раяном Лохте?");
        break;
    default:
        alert("Круто!");
        break;
}

//Далі йде код, де усі повідомлення виводяться в одному алерті
/*let birthYear = prompt("Введіть рік народження");
let age = 0;
let currentYear = new Date();
currentYear = currentYear.getFullYear();

if (!birthYear){
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
    age = "-";
}
else {
    while(birthYear > currentYear){
        birthYear = Number(prompt("Введіть правильно рік народження"));
    }
    age = currentYear - Number(birthYear);
}

let city = prompt("В якому місті ви живете?");
if (!city){
    alert("Шкода, що Ви не захотіли ввести своє місто");
    city = "-";
}

let sport = prompt("Який ваш улюблений вид спорту?");
if (!sport){
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
    sport = "-";
}

let cityMessage = "";
switch(city.toLowerCase()) {
    case 'київ':
        cityMessage = `Ти живеш у столиці України`;
        break;
    case 'лондон':
        cityMessage = `Ти живеш у столиці Великобританії`;
        break;
    case 'вашингтон':
        cityMessage = `Ти живеш у столиці США`;
        break;
    default:
        cityMessage = `Ти живеш у місті ${city}`;
        break;
}

let sportMessage = "";
switch(sport.toLowerCase()){
    case "футбол":
        sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
        break;
    case "волейбол":
        sportMessage = "Круто! Хочеш стати Джордан Ларсон?";
        break;
    case "плавання":
        sportMessage = "Круто! Хочеш стати Раяном Лохте?";
        break;
    default:
        sportMessage = "Круто!";
        break;
}

const finalMessage = `Ваш вік ${age}. ${cityMessage}. ${sportMessage}`;
alert(finalMessage);*/