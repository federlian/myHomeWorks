// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let text = document.getElementById('text');
// text.oninput = () => {
//     localStorage.setItem('text', text.value)
// };
// text.value = localStorage.getItem('text');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let forma = document.forms.forma;
// getForm(forma);
//
// function saveForm() {
//     for (let i = 0; i < forma.length; i++) {
//         let element = forma[i];
//         if (element.type === 'checkbox' || element.type === 'radio') {
//             element.checked ?
//                 element.value = 'true' :
//                 element.value = 'false'
//         }
//         localStorage.setItem(element.id, element.value)
//     }
// }
//
// function getForm(form) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(form.children[i].id)) {
//             form.children[i].value = localStorage.getItem(form.children[i].id);
//             if (form.children[i].value === 'true') {
//                 form.children[i].setAttribute('checked', 'checked')
//             }
//         }
//     }
// }
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let text = document.getElementById('text');
// let nextBtn = document.getElementById('next');
// let prevBtn = document.getElementById('prev');
// let save = document.getElementById('saveBtn');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, text.value)
// };
//
// prevBtn.onclick = () => {
//     nextBtn.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === text.value) {
//                 index = key
//             }
//         }
//     }
//     if (index === '1') {
//         prevBtn.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// }
//
// nextBtn.onclick = () => {
//     prevBtn.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === text.value) {
//                 index = key
//             }
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         nextBtn.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// }
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
