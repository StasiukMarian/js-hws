// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let array = [1 , 2 , 3 , 4 , 5 , 6 , 7 ,8 , 9 , 10 ];
let result = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9];
console.log(result);
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: 'Таємничий острів',
    countPages: 500,
    genre: 'Пригодницький роман'
}
// console.log(book1)
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'Пятнадцятирічний капітан',
    countPages: 500,
    genre: 'Пригодницький роман',
    author: 'Жуль Верн'
}
//4.Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// Варіант 1

let arrayBooks = [book1, book2];
console.log(arrayBooks[0],arrayBooks[1])

//Варіант 2
// let arrayBook = [
//     {
//         name: 'Таємничий острів',
//         countPages: 500,
//         genre: 'Пригодницький роман'
//     },
//     {
//         name: 'Пятнадцятирічний капітан',
//         countPages: 500,
//         genre: 'Пригодницький роман',
//         author: 'Жуль Верн'
//     }
// ]
//     console.log(arrayBook[0])
//     console.log(arrayBook[1])

//5.Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
    let height, width , s ;
    height = 23;
    width = 10 ;

    s = height * width;
    console.log('Площа заданого прямокутника = ' + s + ' см')

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
    let heightC, dc, Pi, r , v ;
    heightC = 10;
    dc = 4;
    Pi = 3.14;

    r= 4/2 // вичислимо радіус за допомогою ф-ли радіус = половині діаметру

    v = Pi*(r**2)*heightC ; // Порахуємо об'єм за допомогою ф-ли Pi*r*2*h
    console.log(v)
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
    let n, m , k;
    n = 3 ;
    m = 4 ;

    k = Math.sqrt((n**2)+(m**2));
    console.log(k) // Гіпотенуза = 5

let div =document.querySelectorAll('.test')
console.log(div);
for (let i = 0 ; i < div.length ;i++){
    console.log(div[i]);
    div[i].style.background = 'red';
    div[i].style.color = '#fff';

}