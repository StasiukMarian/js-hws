//  Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.

// let cutString = (str, n) => {
//     const res = [];
//     for (let i = 0 ; i < str.length ; i++) {
//         res.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     console.log(res)
//     return res
// };
// document.writeln(cutString('наслаждение',   4))

// - Створити функцію-валідатор для адрес електронної пошти.

// let checkEmails = (str) => {
//     if (str.length >= 10 && str.length < 20 && str.includes('@' , '.' )  ){
//         return str.toLowerCase()
//     }
//     else {
//          console.log('not a valid')
//     }
// }
// console.log(checkEmails('someeMAIL@i.ua'));


// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// let sort = coursesArray.sort((a,b) => {
//     return b.modules.length - a.modules.length
// })
// console.log(sort)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

// let count = (str, stringSearch) => {
//     return  (str.split(stringSearch).length - 1)
// }
// console.log(count("Астрономия это наука о небесных объектах", "о"));
