// // // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// //
// // let text = document.getElementById('text');
// // text.onclick = () => {
// //     text.style.display = 'none'
// // }
// //
// // //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// //
// // let button = document.getElementById('button');
// // button.onclick = () => {
// //     button.style.display = 'none'
// // }
// //
// // // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// //
// // let age = document.forms.age;
// // age.btnConfirm.onclick = () => {
// //     age.userAge.value < 18 ? alert('Ти малий') : alert('Ти вже великий')
// // }
// //
// // // - Создайте меню, которое раскрывается/сворачивается при клике
// //
// // let ulka = document.getElementById('ulka');
// // let menu = document.getElementById('menu');
// // menu.onclick = (ev) => {
// //     ev.preventDefault();
// //     ulka.style.display === 'block' ? ulka.style.display = 'none' : ulka.style.display = 'block'
// // }
// // console.log(menu);
// //
// // // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // //     Вывести список комментариев в документ, каждый в своем блоке.
// // //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// //
// // let comments = [
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// // ]
// //
// // for (const comment of comments) {
// //     let divka = document.createElement('div');
// //     let h2 = document.createElement('h2');
// //     let p = document.createElement('p');
// //     h2.innerText = comment.title;
// //     p.innerText = comment.body;
// //     document.body.appendChild(divka);
// //     divka.appendChild(h2);
// //     h2.appendChild(p);
// //     let btn = document.createElement('input');
// //     btn.type = 'submit';
// //     btn.value = 'Сховати комент';
// //     divka.appendChild(btn);
// //     btn.onclick = () => {
// //         p.style.display = 'none'
// //     }
// // }
// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.getElementById('btnForms');
// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
//
// button.onclick = () => {
//     console.log(`${form1.input1.value} ${form1.input2.value} ${form2.input1.value} ${form1.input2.value}`)
// }
//
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кліькіть ячеєк в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// function createTable(rows, cols, element) {
//     let table = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             let col = document.createElement('td');
//             row.appendChild(col);
//             col.innerText = cols + rows;
//         }
//         table.appendChild(row);
//     }
//     document.getElementById(element).appendChild(table)
// }
//
// createTable(5,6,'table');
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// function createTablePro(rows, cols, value) {
//     let table1 = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             let col = document.createElement('td');
//             row.appendChild(col);
//             col.innerText = value;
//         }
//         table.appendChild(row);
//     }
//     document.getElementById(element).appendChild(table1)
// }
//
// let table = document.forms.table;
// table.btnTable.onclick = (ev) => {
//     ev.preventDefault();
//     createTablePro(table.tr.value, table.td.value, table.cell.value)
// }
// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let images = [
//     'https://meline.lviv.ua/wp-content/uploads/2019/06/javascript-1231.png',
//     'https://selenium-python.com/wp-content/uploads/2017/11/locating-web-elements-selenium-1024x576.jpg',
//     'https://it-black.ru/wp-content/uploads/2019/04/nasledovanie_css.png'
// ];
// let num = 0;
// function next() {
//     let karusel = document.getElementById('karusel');
//     num++;
//     if(num >= images.length) {
//         num = 0;
//     }
//     karusel.src = images[num];
// }
// function prev() {
//     let karusel = document.getElementById('karusel');
//     num--;
//     if(num < 0) {
//         num = images.length-1;
//     }
//     karusel.src = images[num];
// }
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let array = ['putin', 'russia', 'zlo'];
// let cenzura = document.forms.cenzura;
// cenzura.btn.onclick = () => {
//     array.includes(cenzura.slovo.value) ? alert('separatist') : alert('Slava Ukraini')
// }
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
//
// let cenzura1 = document.forms.cenzura1;
// cenzura1.btn1.onclick = () => {
//     let string = cenzura1.slovo1.value.split(' ');
//     console.log(string);
//     for (let element of string) {
//         array.includes(element) ? alert('separatist') : console.log('good')
//     }
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте



// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let filter1 = usersWithAddress.filter(value => value.status === false);
let filter2 = usersWithAddress.filter(value => value.age >= 29);
let filter3 = usersWithAddress.filter(value => value.address.city === 'Kyiv');

let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');

fun1 = () => {
    if (check1.checked) {
        let filter1 = usersWithAddress.filter(value => value.status === false);
    }
    return console.log(filter1);
}

fun2 = () => {
    if (check1.checked) {
        let filter2 = usersWithAddress.filter(value => value.age >= 29);
    }
    return console.log(filter2);
}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
