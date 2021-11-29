// 1. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model,maker,year,maxSpeed,volume) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function (){
//         for (let keys in this){
//             console.log(keys + ` - ` + this[keys])
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed
//     };
//     this.changeYear = function (newValue){
//         this.year = newValue
//     };
//     this.addDriver = function (driver){
//         this.driver = driver
//     };
// }

// - (Те саме, тільки через клас)

// class Cars2 {
//     constructor(model,maker,year,maxSpeed,volume) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info (){
//         for (let keys in this){
//             console.log(keys + ` - ` + this[keys])
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     changeYear(newValue){
//         this.year = newValue
//     }
//     addDriver (newDriver){
//         this.driver = newDriver
//     }
// }

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    constructor (name, age, sizeFoot){
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot
    }
}

let array = [
    popelushka1 = new Popelushka('Оля', 20 , 35),
    popelushka2 = new Popelushka('Віка', 22 , 36),
    popelushka3 = new Popelushka('Катя', 21 , 37),
    popelushka4 = new Popelushka('Таня', 24 , 36),
    popelushka5 = new Popelushka('Марія', 19 , 38),
    popelushka6 = new Popelushka('Христина', 26 , 39),
    popelushka7 = new Popelushka('Анна', 27 , 36),
    popelushka8 = new Popelushka('Вероніка', 18 , 37),
    popelushka9 = new Popelushka('Юлія', 20 , 40),
    popelushka10 = new Popelushka('Оксана', 28 , 39)
]
console.log(array)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name , age , findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }
}
let prince = new Prince('Олег', 26, 40)
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let finder = (array,prince) => {
    for (let item of array){
        if (item.sizeFoot === prince.findShoes){
            return (`Твоя попелюшка - ${item.name}`)
        }
    }
}
console.log(finder(array, prince));
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = array.find((item) => item.sizeFoot === prince.findShoes);
console.log(find)