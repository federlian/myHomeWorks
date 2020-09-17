// #task
// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.height = height;
        this.weight = weight;
    }
    return Human;
}());
var deputy = /** @class */ (function (_super) {
    __extends(deputy, _super);
    function deputy(weight, height, firstName, lastName, age, grafter, sizeBribe) {
        var _this = _super.call(this, weight, height) || this;
        _this.age = age;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.grafter = grafter;
        _this.sizeBribe = sizeBribe;
        return _this;
    }
    return deputy;
}(Human));
