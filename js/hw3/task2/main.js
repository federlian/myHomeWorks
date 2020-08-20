// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let obj1 = {name: 'Stepan', age: 24, married: true};
let obj2 = {name: 'Andriy', age: 28, married: true};
let obj3 = {name: 'Max', age: 26, married: false};
let obj4 = {name: 'Anastasia', age: 21, married: true};
let obj5 = {name: 'Ira', age: 34, married: false};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let home = {
    door: true, 
    windows: [1, 2, 3, 4], 
    room: {
        one: 'My', 
        two: 'Brother', 
        three: 'Parents'
    }, 
    color: 'yellow'
};

let notebook = {
    cpu: ['core1', 'core2', 'core3'], 
    cdrom: true, 
    display: '1920x1080', 
    ssd: 128, 
    soft : {
        vscode: true, 
        intellij: false
    }
};

let family = {
    father: {
        name: 'Henry', 
        age: 45, 
        job: true
    },
    mother: {
        name: 'Anna',
        age: 40,
        job: true,
    },
    kids: ['Peter', 'Jessy', 'Alan']
};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const key in obj1) {
//     console.log(key);
// };

// for (const key in obj2) {
//     console.log(key);
// };

// for (const key in obj3) {
//     console.log(key);
// };

// for (const key in obj4) {
//     console.log(key);
// };

// for (const key in obj4) {
//     console.log(key);
// };

// for (const key in home) {
//     console.log(key);
// };

// for (const key in notebook) {
//     console.log(key);
// };

// for (const key in family) {
//     console.log(key);
// };



// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(home));
// console.log(Object.keys(notebook));
// console.log(Object.keys(family));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    {name: 'Lviv', population: 700000, country: 'Ukraine', region: 'Lviv'},
    {name: 'Drogobych', population: 72000, country: 'Ukraine', region: 'Lviv'},
    {name: 'Kyiv', population: 2000000, country: 'Ukraine', region: 'Kyiv'},
    {name: 'Poznan', population: 1200000, country: 'Poland', region: 'Poznan'},
    {name: 'New York', population: 50000000, country: 'USA', region: 'NY'},
]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let carsNew = [
    {
        model: 'BMW', 
        year: 2000, 
        engine: 100, 
        color: 'black', 
        driver: {
            name: 'Stepan', 
            age: 24, 
            sex: 'male', 
            experience: 5
        }
    },
    {
        model: 'Audi', 
        year: 2010, 
        engine: 325, 
        color: 'gray',
        driver: {
            name: 'Pavlo',
            age: 25,
            sex: 'male',
            experience: 7
        }
    },
    {
        model: 'Volkswagen', 
        year: 2008, 
        engine: 150, 
        color: 'yellow',
        driver: {
            name: 'Anna',
            age: 30,
            sex: 'female',
            experience: 10
        }
    },
    {
        model: 'Fiat', 
        year: 2005, 
        engine: 100, 
        color: 'blue',
        driver: {
            name: 'Viktor',
            age: 45,
            sex: 'male',
            experience: 20
        }
    },
    {
        model: 'Aston Martin', 
        year: 1999, 
        engine: 170, 
        color: 'red',
        driver: {
            name: 'Andriy',
            age: 28,
            sex: 'male',
            experience: 3
        }
    },
    {
        model: 'Seat', 
        year: 1980, 
        engine: 452, 
        color: 'silver',
        driver: {
            name: 'Peter',
            age: 30,
            sex: 'male',
            experience: 6
        }
    },
    {
        model: 'Jeep', 
        year: 2001, 
        engine: 400, 
        color: 'black',
        driver: {
            name: 'Jessica',
            age: 21,
            sex: 'female',
            experience: 1
        }
    },
    {
        model: 'Mitsubishi', 
        year: 2005, 
        engine: 300, 
        color: 'aqua',
        driver: {
            name: 'Adam',
            age: 32,
            sex: 'male',
            experience: 10
        }
    },
    {
        model: 'Infinity', 
        year: 2018, 
        engine: 275, 
        color: 'green',
        driver: {
            name: 'Natali',
            age: 35,
            sex: 'female',
            experience: 13
        }
    },
    {
        model: 'Jaguar', 
        year: 2015, 
        engine: 200, 
        color: 'brown',
        driver: {
            name: 'Henry',
            age: 22,
            sex: 'male',
            experience: 0
        }
    },
];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
};

let j = 0;
while (j < cities.length) {
    console.log(cities[j]);
    j++;
};

let k = 0;
while (k < carsNew.length) {
    console.log(carsNew[k]);
    k++;
};

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
};

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
};

for (let i = 0; i < carsNew.length; i++) {
    console.log(carsNew[i]);
};

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (const iterator of cars) {
    console.log(iterator);
};

for (const iterator of cities) {
    console.log(iterator);
};

for (const iterator of carsNew) {
    console.log(iterator);
};

// - взять объекты из задания 1 и превратить каждый в json.

let json1 = JSON.stringify(obj1);
let json2 = JSON.stringify(obj2);
let json3 = JSON.stringify(obj3);
let json4 = JSON.stringify(obj4);
let json5 = JSON.stringify(obj5);

// - взять json из задания 11 и превратить их обратно в объекты.

let newObj1 = JSON.parse(json1);
let newObj2 = JSON.parse(json2);
let newObj3 = JSON.parse(json3);
let newObj4 = JSON.parse(json4);
let newObj5 = JSON.parse(json5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (let iterator of cars) {
    JSON.stringify(iterator)
};

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let iterator of cities) {
    JSON.stringify(iterator)
};

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

let carsNewJson = [];
for (let iterator of carsNew) {
    carsNewJson.push(JSON.stringify(iterator))
};

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let user = [
    ['Petro', ['js', 'html', 'css']],
    ['Stepan', ['java', 'c++']],
    ['Oleh', ['react', 'angular']]
];

for (let i =0; i < user.length; i++) {
    for (let j = 0; j < user[i].length; j++) {
        console.log(user[i][j]);
    }
};
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users1 = [
    {
        name: 'vasya', 
        age: 31, 
        status: false, 
        skills: ['java', 'js']
    }, 
    {
        name: 'petya', 
        age: 30, 
        status: true, 
        skills: ['java', 'js', 'html']
    }, {
        name: 'kolya', 
        age: 29, 
        status: true, 
        skills: ['mysql', ',mongo']
    }, {
        name: 'olya', 
        age: 28, 
        status: false, 
        skills: ['java', 'js']
    }, {
        name: 'max', 
        age: 30, 
        status: true, 
        skills: ['mysql', ',mongo']
    }
];

for (const iterator of users1) {
    for (const key in iterator)
    console.log(iterator[key]);
    
}
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив. ?????????
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

for (let i of users) {
    let newDiv = document.createElement('div');
    newDiv.textContent = JSON.stringify(i);
    document.body.append(newDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

  


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithCities = [];
for (i = 0; i < usersWithId; i++) {
    for (j = 0; j < citiesWithId; f++) {
        if (Object.keys(usersWithId[i]) === Object.keys(citiesWithId[j])) {
            
        }
    }
}
console.log(usersWithCities);


// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту