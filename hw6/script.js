// 1.- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let string = 'hello world'
// let string = 'lorem ipsum'
// let string = 'javascript is cool'
// console.log(string.length);

// 2.- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// let string = 'hello world'
// let string = 'lorem ipsum'
// let string = 'javascript is cool'
// console.log(string.toUpperCase());

// 3.- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string = 'HELLO WORLD'
// let string = 'LOREM IPSUM'
// let string = 'JAVASCRIPT IS COOL'
// console.log(string.toLowerCase());

// 4.- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim());

// 5.- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToArray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToArray = (str) => {
//     console.log(str.split(' '));
// }
// stringToArray('Каждый охотник желает знать')

// 6.- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// }
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters(str, 7))

// 7.- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-')
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str))

// 8.- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstLetterToUpper = (str) =>{
//     return str[0].toUpperCase() + str.slice(1)
// }
// let str = 'hello'
// console.log(firstLetterToUpper(str))

// 9.- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// }
// let str = 'lol lol'
// console.log(capitalize(str));