// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
//
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// let arr2 = ['JS', 'HTML', 'CSS', 'JAVA', 'PYTHON'];
// console.log(arr2);
// let arr3 = [3, 5, 'hello', 'world', true];
// console.log(arr3);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let array = [];
// array[0] = 'name';
// array[1] = 'age';
// array[2] = 45;
// array[3] = false;
// console.log(array);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem</div>`);
// }
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ${i}</div>`);
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum</h1>`);
//     i++;
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum ${i}</h1>`);
//     i++;
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [23, 3, 4, 12, 45, 35, 67, 76, 54, 1];
// for (const arrName of arr) {
//     console.log(arrName);
// }
//
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['js', 'python', 'java', 'react', 'node.js', 'angular', 'mysql', 'html', 'css', 'english'];
// for (const arrName of arr) {
//     console.log(arrName);
// }
//
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arr = [23, 3, 4, 12, 'js', 'java', 'english', 'learn', true, false];
// for (const arrName of arr) {
//     console.log(arrName);
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let arr = [23, 3, 4, 12, 'js', 'java', 'english', 'learn', true, false];
// for (const arrName of arr) {
//     if (typeof arrName == 'boolean') {
//         console.log(arrName)
//     }
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let arr = [23, 3, 4, 12, 'js', 'java', 'english', 'learn', true, false];
// for (const arrName of arr) {
//     if (typeof arrName == 'number') {
//         console.log(arrName)
//     }
// }
//
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = [23, 3, 4, 12, 'js', 'java', 'english', 'learn', true, false];
// for (const arrName of arr) {
//     if (typeof arrName == 'string') {
//         console.log(arrName)
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [];
// arr[0] = 23;
// arr[1] = false;
// arr[2] = 'java';
// arr[3] = 'css';
// arr[4] = 'html';
// arr[5] = true;
// arr[6] = 43;
// arr[7] = 6;
// arr[8] = 90;
// arr[9] = 67;
// for (let elem of arr) {
//     console.log(elem);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i} <br>`)
// }
//
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} <br>`)
// }
//
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+= 2) {
//     console.log(i);
//     document.write(`${i} <br>`)
// }
//
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`${i} <br>`)
//     }
// }
//
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(i);
//         document.write(`${i} <br>`)
//     }
// }
//
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let min = 0; min < 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log(`${min} min ${sec} sec`);
//     }
// }
//
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let h = 0; h < 3; h++) {
//     for (let min = 0; min < 60; min++) {
//         if (h === 2 && min === 20) {
//             break;
//         }
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`${h} hours ${min} min ${sec} sec`);
//         }
//     }
// }
//
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let str = []
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }
// console.log(str);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let i = 0;
// let str = [];
// while (i < arr.length) {
//     str += arr[i];
//     i++;
// }
// console.log(str);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c'];
// let str = []
// for (let elem of arr) {
//     str += elem;
// }
// console.log(str);
//
//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let newArr = [];
// for (let i = 2; i >= 0; i--) {
//     newArr.push(arr[i])
// }
// console.log(newArr);
//
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
// for (let i = 4; i < 7; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let arr = [1, 2, 3];
// for (let i = 6; i > 3; i--) {
//     arr.unshift(i);
// }
// console.log(arr);
//
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());
//
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 2));
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [2, 5, 7, 33, 56, 12, 67, 903, 3, 21];
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
// let arr = [2, 5, 7, 33, 56, 12, 67, 903, 3, 21];
// let newArr = [];
// for (let elem of arr) {
//     newArr.push(elem);
// }
// console.log(newArr);
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr = [2, 5, 7, 33, 56, 12, 67, 903, 3, 21];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i];
// }
// console.log(newArr);
//
//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// };
//
//     2. перебрати його циклом for
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let element of arr) {
//     console.log(element);
// }
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i < arr.length) {
//     if (i % 2) {
//         console.log(arr[i]);
//     }
//     i++;
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let element in arr) {
//     if (element % 2) {
//         console.log(element);
//     }
// }
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2) {
//         console.log(arr[i]);
//     }
//     i++;
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let element of arr) {
//     if (element % 2) {
//         console.log(element);
//     }
// }
//
// 7. замінити кожне число кратне 3 на слово "okten"
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
//
// 8. вивести масив в зворотньому порядку.
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// 1
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = arr.length -1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// };
//
// 2
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >=0; i--) {
//     console.log(arr[i]);
// }
//
// 3
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length -1;
// while (i >= 0) {
//     if (i % 2) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//
// 4
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length -1; i>=0; i--) {
//     if (i % 2) {
//         console.log(arr[i]);
//     }
// }
//
// 5
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//
// 6
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2) {
//         console.log(arr[i]);
//     }
// }
//
// 7
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
//
// 10
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);
//
// 2. заповнити його 50 непарними числами за допомоги циклу.
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         arr.push(i);
//     }
// }
// console.log(arr);
//
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//
// let arr = [];
// for (i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random()*100)
// }
// console.log(arr);
//
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//
// let arr = [];
// for (i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random()*733) + 8;
// }
// console.log(arr);
//
// 2. вывести на консоль  каждый третий елемент
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random()*733) + 8;
// }
// for (let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }
//
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random()*733) + 8;
// }
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
//
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random()*733) + 8;
// }
// let newArr = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
//
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum / (arr.length - 1));
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random()*100) + 1;
// }
// console.log(arr)
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] * 5;
// }
// console.log(newArr);
//
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
//
// let arr = ['js', 'css', 3, true, 67, 'html', false, 56, 90, 'node'];
// let newArr = [];
// for (let element of arr) {
//     if (typeof element === 'number') {
//         newArr.push(element)
//     }
// }
// console.log(newArr);