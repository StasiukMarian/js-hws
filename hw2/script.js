// 1.- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let x = +prompt('Щоб розрахувати четверть до якої припадає година введіть число від 0 до 59');
// if (x >=0 && x <= 15 ){
//     console.log('Ваше число належить до першої четверті')
// } else if (x > 15 && x <= 30){
//     console.log('Ваше число належить до другої четверті')
// } else if (x > 30 && x <= 45){
//     console.log('Ваше число належить до третьої четверті')
// } else if (x > 45 && x <= 59){
//     console.log('Ваше число належить до четвертої четверті')
// } else {
//     console.log ('Введено невірне значення . Введіть число від 0 до 59')
// }

// 2.У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 31;
//
//     if (day > 0 && day <=10){
//         console.log('Дане число потрапляє у першу декаду , так як воно у межі від 1 до 10 ')
//     }   else if (day > 10 && day <=20) {
//     console.log('Дане число потрапляє у другу декаду , так як воно у межі від 11 до 20 ')
// }else if (day > 20 && day <=31) {
//         console.log('Дане число потрапляє у третю декаду , так як воно у межі від 21 до 31 ')
//     }
//


// 3.У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = 10<5;
// if (test === true){
//     console.log('не вірно')
// } else if (test !== true) {
//     console.log('Вірно')
// }
let test = 10<5;
(test === true) ? console.log('не вірно') : console.log('вірно')
// (test !== true) ? console.log('не вірно') : console.log('вірно')


// 4.- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1 ;
if (a !== 0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// 5.- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let i = prompt('Enter day of a week (from 1 to 7) ')
//
// switch (i){
//     case '1':
//         console.log('Понеділок : Забрати сестру з школи та відвідати лекцію о 20:00' );
//         break;
//         case '2':
//         console.log('Вівторок :  Виконувати практичні завдання');
//         break;
//         case '3':
//         console.log('Середа : Піти на прогулянку та відвідати лекцію о 20:00');
//         break;
//         case '4':
//         console.log('Четвер : Виконувати практичні завдання');
//         break;
//         case '5':
//         console.log('Пятниця : Лекція о 20:00');
//         break;
//         case '6':
//         console.log('Субота : Відпочинок з сім'+"'"+'єю та друзями');
//         break;
//         case '7':
//         console.log('Неділя : Сходити на прогулянку та виконати усі завдання');
//         break;
// }

// 6.Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Введіть рік для того щоб визначити чи він високосний')
//
// if (year % 4 ===0){
//     console.log(year + ': рік високосний')
// } else {
//     console.log(year + ' не високосний')
// }

// 7.- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let x = 'ECMAScript'
// let trueName = prompt('Яка офіційна назва JavaScript?')
// if (trueName === x){
//     console.log('Правильно!')
// } else {
//     console.log('Не знаєте? ' + x)
// }