// - створити функцію яка виводить масив

function showArr(array) {
    console.log(array)
}

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function arrRandom() {
    let arr =[];
    for (let i = 0; i < 5; i++) {
        arr[i] = (Math.floor(Math.random() * 10))
    }
    showArr(arr)
}

arrRandom()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

minNum(3, 7, 8);

function minNum(num1, num2, num3) {
    let min = Math.min(num1, num2, num3);
    console.log(min);
    return min
}


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

maxNum(3, 7, 8);


function maxNum(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    console.log(max);
    return max
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function maxMinNum() {
    let min = arguments[0];
    for (let argument of arguments) {
        if (min > argument) {
            min = argument
        }
    }
    let max = arguments[0];
    for (let argument of arguments) {
        if (max < argument) {
            max = argument
        }
    }
    console.log(max);
    return min;
}

maxMinNum(4, 8 ,9);
// - створити функцію яка виводить масив

function showArr(array) {
    console.log(array)
}

// - створити функцію яка повертає найбільше число з масиву

function maxNumArr(arr) {
    let max = arr[0];
    for (let arrElement of arr) {
        if (max < arrElement) {
            max = arrElement
        }
    }
    return max
}

console.log(maxNumArr([2, 4, 6]));
// - створити функцію яка повертає найменьше число з масиву

function minNumArr(arr) {
    let min = arr[0];
    for (let arrElement of arr) {
        if (min > arrElement) {
            min = arrElement
        }
    }
    return min
}

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sumArr(array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement
    }
    return sum
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function sumArithmetic(array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement
    }
    let newSum = sum / array.length;
    return newSum
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function arrObj(array) {
    return array.length
}

let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];

console.log(arrObj(users));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function keyQuality(array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += Object.keys(arrayElement).length
    }
    return sum
}

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumElement(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = array1[i] + array2[i]
    }
    return newArray
}

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function someFunc(array, i) {
    let arr = array[i];
    array[i] = array[i + 1];
    array[i + 1] = arr;
    return array
}

console.log(someFunc([1, 2, 3], 1))

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

function nullEnd(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
            array.push(0)
        }
    } return array
}

// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function helloOwu() {
    let divka = document.createElement('div');
    divka.textContent = 'Hello owu';
    document.body.append(divka)
}

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function pasteElement(typeElement, text) {
    let element = document.createElement(typeElement);
    element.innerText = text;
    document.body.append(element)
}

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

let cars = [
    {model: 'BMW', year: 2000, engine: 100, color: 'black'},
    {model: 'Audi', year: 2010, engine: 325, color: 'gray'},
    {model: 'Volkswagen', year: 2008, engine: 150, color: 'yellow'},
    {model: 'Fiat', year: 2005, engine: 100, color: 'blue'},
    {model: 'Aston Martin', year: 1999, engine: 170, color: 'red'},
    {model: 'Seat', year: 1980, engine: 452, color: 'silver'},
    {model: 'Jeep', year: 2001, engine: 400, color: 'black'},
    {model: 'Mitsubishi', year: 2005, engine: 300, color: 'aqua'},
    {model: 'Infinity', year: 2018, engine: 275, color: 'green'},
    {model: 'Jaguar', year: 2015, engine: 200, color: 'brown'},
];

function carInDiv(cars, id) {
    for (const car of cars) {
        let div = document.createElement('div');
        div.innerText = car.model + ' ' + car.year + ' ' + car.engine + ' ' + car.color;
        let elementById = document.getElementById(id);
        elementById.appendChild(div)
    }
}

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function carInDiv2(array, id) {
    for (const car of cars) {
        let carDiv = document.createElement('div');
        let modelDiv = document.createElement('div');
        modelDiv.innerText = car.model;
        carDiv.appendChild(modelDiv);

        let yearDiv = document.createElement('div');
        yearDiv.innerText = car.year;
        carDiv.appendChild(yearDiv);

        let engineDiv = document.createElement('div');
        engineDiv.innerText = car.engine;
        carDiv.appendChild(engineDiv);

        let colorDiv = document.createElement('div');
        colorDiv.innerText = car.color;
        carDiv.appendChild(colorDiv);

        let elementById = document.getElementById(id);
        elementById.appendChild(carDiv);
    }
}

carInDiv2(cars, 'take');
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

function usersCities(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.le ngth; j++){
            if (array1[i].id === array2[j].user_id) {
                array1[i].address = array2[j]
            }
        }
    } return array1
}

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];
// "

function fightClub(array) {
    for (const rule of rules) {
        let divRule = document.createElement('div');
        document.body.append(divRule);

        let numRule = document.createElement('h1');
        numRule.innerText = rule.title;
        divRule.appendChild(numRule);

        let bodyRule = document.createElement('p');
        bodyRule.innerText = rule.body;
        divRule.appendChild(bodyRule)
    }
}

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
//
//
//
//
//
