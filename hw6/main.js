//
// - создать массив с 20 числами.

let numbers = [2, 4, 33, 54, 34, 12, 7, 645, 76, 34, 432, 8, 87, 167, 76, 67, 39, 0, 62, 83];

// -- при помощи метода sort и колбека  отсортировать массив.
//
// let sort = numbers.sort((a, b) => a - b);
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// let sortReverse = numbers.sort((a, b) => b - a);
// console.log(sortReverse);

// -- при помощи filter получить числа кратные 3
//
// let filter3 = numbers.filter(value => !(value % 3));
// console.log(filter3);

// -- при помощи filter получить числа кратные 10
//
// let filter10 = numbers.filter(value => !(value % 10));
// console.log(filter10);

// -- перебрать (проитерировать) массив при помощи foreach()
//
// let numbers1 = numbers.forEach(value => console.log(value))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
// let mapX3 = numbers.map(value => value * 3);
// console.log(mapX3);

// - создать массив со словами на 15-20 элементов.
//
// let array = ['hello', 'javaScript', 'MyName', 'Lviv', 'react', 'bag', 'HTML', 'CSS', 'HP', 'OktenWeb', 'development', 'cool', 'process', 'happy', 'learn'];

// -- отсортировать его по алфавиту в восходящем порядке.
//
// let sort = array.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
// console.log(sort);
//
// -- отсортировать его по алфавиту  в нисходящем порядке.
//
// let sortReverse = array.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1);
// console.log(sortReverse);
//
// -- отфильтровать слова длиной менее 4х символов
//
// let word4 = array.filter(value => value.length <= 4)
// console.log(word4);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newArray = array.map(value => value + '!');
// console.log(newArray);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
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
        {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a, b) => a.age - b.age);

// users.sort((a, b) => b.age - a.age);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a, b) => a.name.length - b.name.length);

// users.sort((a, b) => b.name.length - a.name.length);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let userId = users.map((value, index) => {
    value.id = index;
    return value
});

// - відсортувати його за індентифікатором

userId.sort((a, b) => a.id - b.id);

// -- наисать функцию калькулятора с 2мя числами и колбеком

function calculate(num1, num2, callback) {
    return callback(num1, num2)};

let add = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let mul = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;

let result = calculate(2, 5, add);
console.log(result);

// -- наисать функцию калькулятора с 3мя числами и колбеком

// let calculate = (num1, num2, num3, callback) => callback(num1, num2, num3);
//
// let add = (num1, num2, num3) => num1 + num2 + num3;
// let sub = (num1, num2, num3) => num1 - num2 - num3;
// let mul = (num1, num2, num3) => num1 * num2 * num3;
// let div = (num1, num2, num3) => num1 / num2 / num3;
//
// let result = calculate(2, 8, 9, mul)
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
    ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

let volume3 = cars.filter(car => car.volume >= 3);

// - двигун = 2л

let volume2 = cars.filter(car => car.volume === 2);

// - виробник мерс

let mers = cars.filter(car => car.producer ===  'mercedes');

// - двигун більше 3х літрів + виробник мерседес

let mers3 = cars.filter(car => car.volume >= 3 && car.producer === 'mercedes');

// - двигун більше 3х літрів + виробник субару

let subaru3 = cars.filter(car => car.volume >= 3 && car.producer === 'subaru');

// - сили більше ніж 300

let threeHundred = cars.filter(car => car.power >= 300);

// - сили більше ніж 300 + виробник субару

let subaru300 = cars.filter(car => car.power >= 300 && car.producer === 'subaru')

// - мотор серіі ej

let ej = cars.filter(car => car.engine.startsWith('ej'));

// - сили більше ніж 300 + виробник субару + мотор серіі ej

let subaruEj300 = cars.filter(car => car.power >= 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));

// - двигун меньше 3х літрів + виробник мерседес

let mers31 = cars.filter(car => car.volume < 3 && car.producer === 'mercedes');

// - двигун більше 2л + сили більше 250

let mers32 = cars.filter(car => car.volume >= 2 && car.power >= 250);

// - сили більше 250  + виробник бмв

let bmw250 = cars.filter(car => car.power >= 250 && car.producer === 'bmw');

//
// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address:
            {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address:
            {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address:
            {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address:
            {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address:
            {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address:
            {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address:
            {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address:
            {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address:
            {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address:
            {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address:
            {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей

let sort = usersWithAddress.sort((a, b) => a.id - b.id);

// -- отсортировать его по id пользователей в обратном опрядке

let sortReverse = usersWithAddress.sort((a, b) => b.id - a.id);

// -- отсортировать его по возрасту пользователей

let sortAge = usersWithAddress.sort((a, b) => a.age - b.age);

// -- отсортировать его по возрасту пользователей в обратном порядке

let sortAgeReverse = usersWithAddress.sort((a, b) => b.age - a.age);

// -- отсортировать его по имени пользователей

let sortName = usersWithAddress.sort((a, b) => a.name > b.name ? 1 : -1);

// -- отсортировать его по имени пользователей в обратном порядке

let sortNameReverse = usersWithAddress.sort((a, b) => a.name < b.name ? 1 : -1);

// -- отсортировать его по названию улицы  в алфавитном порядке

let sortStreet = usersWithAddress.sort((a, b) => a.address.street > b.address.street ? 1 : -1);

// -- отсортировать его по номеру дома по возрастанию

let sortHome = usersWithAddress.sort((a, b) => a.address.number - b.address.number);

// -- отфильтровать (оставить) тех кто младше 30

let usersDo30 = usersWithAddress.filter(user => user.age < 30);

// -- отфильтровать (оставить) тех у кого отрицательный статус

let usersStatusFalse = usersWithAddress.filter(user => !user.status);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let usersStatusFalseDo30 = usersWithAddress.filter(user => !user.status && user.age < 30);

// -- отфильтровать (оставить) тех у кого номер дома четный

let usersHome2 = usersWithAddress.filter(user => !(user.address.number % 2));

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

class Car {
    constructor(model, power, driverName, driverAge, driverExperience, price, year) {
        this.model = model;
        this.power = power;
        this.driver = {};
        this.driver.name = driverName;
        this.driver.age = driverAge;
        this.driver.experience = driverExperience;
        this.price = price;
        this.year =year;
    }
}

let bmw = new Car('bmw', 300, 'Alex', 23, 4, 12000, 2010);
let audi = new Car('audi', 400, 'Petro', 30, 6, 15000, 2011);
let nissan = new Car('nissan', 150, 'Vasya', 31, 7, 12000, 2015);
let tesla = new Car('tesla', 500, 'Stepan', 50, 9, 30000, 2009);
let mitsubishi = new Car('mitsubishi', 290, 'Ivan', 45, 10, 20000, 2018);
let opel = new Car('opel', 270, 'Nazar', 26, 1, 9000, 2008);
let renault = new Car('renault', 250, 'Yura', 20, 2, 13000, 2000);
let fiat = new Car('fiat', 350, 'Oleh', 48, 8, 19000, 2007);
let seat = new Car('seat', 400, 'Pavlo', 35, 15, 17000, 2013);
let lexus = new Car('lexus', 200, 'Taras', 30, 4, 15000, 2014);

let carsNew = [bmw, audi, nissan, tesla, mitsubishi, opel, renault, fiat, seat, lexus];


//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

let newDrivers = ['Peter', 'Alan', 'Vova', 'Vlad', 'Mark'];

carsNew.forEach((car, index) => {
    if (index < 5) {
        car.power += car.power * 0.1;
        car.driver.name = newDrivers[index];
    }
});



//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

carsNew.forEach((car, i) => {
    if (!(i % 2)) {
        car.power += car.power * 0.1;
        car.price += car.price * 0.05;
    }
});

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

carsNew.forEach(value => value.driver.experience < 5 && value.driver.age > 25 ? value.driver.experience += 1 : value)

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let sum = 0;
carsNew.map(value => sum += value.price);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let  arr1 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function minMaxIndex(key, arr) {

  let minIndex = arr.indexOf(key);
  let maxIndex = arr.lastIndexOf(key)

  console.log(`MinIndex = ${minIndex}`)
  console.log(`MaxIndex = ${maxIndex}`)
}

minMaxIndex(4, arr1);