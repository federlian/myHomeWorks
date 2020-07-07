
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let obj = {
//     dog: 'bars',
//     human: 'man',
//     car: 'bmw',
//     apartment: true,
//     book: null
// };

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// ??????????????????????????????????????????

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let obj = {
//      home: {
//         door: true,
//         windows: 5,
//         color: 'grey',
//     },
//     driver: 'Peter',
//     joys: ['car', 'barbie', 'teddy'],
//     table: false,
//     bag: 'heavy'
// }



// Дан массив:
// let users = [
			// 	{name: 'vasya', age: 31, status: false},
			// 	{name: 'petya', age: 30, status: true},
			// 	{name: 'kolya', age: 29, status: true},
			// 	{name: 'olya', age: 28, status: false},
			// 	{name: 'max', age: 30, status: true},
			// 	{name: 'anya', age: 31, status: false},
			// 	{name: 'oleg', age: 28, status: false},
			// 	{name: 'andrey', age: 29, status: true},
			// 	{name: 'masha', age: 30, status: true},
			// 	{name: 'olya', age: 31, status: false},
			// 	{name: 'max', age: 31, status: true}
			// ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// console.log(users[7].status)

// - статус Максима

// console.log(users[10].status)

// - ім'я передостаннього об'єкту

// console.log(users[9].name);


// - ім'я третього об'єкта

// console.log(users[2].name);

// - вік Олега

// console.log(users[6].age);

// - вік Олі

// console.log(users[9].age);

// - вік + ім'я 5го об'єкта

// console.log(`${users[4].age} ${users[4].name}`);

// - вік + сатус Анни

// console.log(`${users[5].age} ${users[5].status}`);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let content = document.getElementById('content');

// - отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');

// - замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'klsdjslkcjsk';

// - замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'sjakcusk h uahidwhd a'

// - змініть кожному елементу колір фону на червоний

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій

content.style.color = 'blue';
rules.style.color = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let rulesClass = document.getElementsByClassName('fc_rules');
for (const iterator of rulesClass) {
    iterator.style.color = 'red'
};

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

document.getElementById('main_header').style.color = 'blue';

// -- робить шириниу елементу ul 400 пікселів

document.getElementsByTagName('ul')[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');
for (const iterator of linkList) {
    iterator.style.width = '50%';
};

// -- отримує текст який зберігається в елементі з класом listElement2

let textListElement2 = document.getElementsByClassName('listElement2')[0].textContent;
console.log(textListElement2);

// -- отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');
for (const iterator of li) {
    iterator.style.backgroundColor = 'silver';
};

// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let a = document.getElementsByTagName('a');
for (const iterator of a) {
    iterator.classList.add('anchor');
    if (iterator.textContent === 'link3') {
        iterator.style.fontSize = '40px'
    };
    iterator.classList.add(`element_${iterator.textContent}`)
};

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
let backgroundColor = prompt('Background color?');
let colorText  = prompt('Text Color?');
for (const iterator of subHeader) {
    iterator.style.backgroundColor = backgroundColor;
    if (iterator.textContent === 'content 2 segment') {
        iterator.style.color = colorText
    }
};

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let userText = prompt('Your text?');
document.getElementsByClassName('content_1')[0].innerText = userText;

// -- отримати елементи p та змінити їм paddin на довільне значення

let p = document.getElementsByTagName('p');
let randomPadding = Math.floor(Math.random() * 20);
for (const iterator of p) {
    iterator.style.padding = `${randomPadding}px`;
};

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let classText2 = document.getElementsByClassName('text2');
for (const iterator of classText2) {
    iterator.innerText = 'HELLOOOOOOOOOOO'
};