// 1.- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let unValid = (str, n, ) =>{
//     let newArr = [];
//         if (str.includes(n)) {
//             let a = str.split(n)
//             a.forEach((item) => {
//                 if (item) newArr.push(item);
//             })
//             console.log(newArr.join(' '))
//         }
// }
// let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// unValid(n1, '.')

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (arr) =>{
//     let newArr = []
//     for (let i = 0 ; i < 100; i ++){
//       newArr.push(Math.round(Math.random()*100))
//     }
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//     let x =  newArr.sort((function(a, b) { return a - b; }))
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//    let filter = x.filter(value => {
//         if (value % 2 === 0) {
//             return true ;
//         }
//     })
//     return filter
// }

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let newArray = (arr) =>{
//     let newArr = []
//         for (let i = 0 ; i < arr.length; i++){
//             newArr.push(arr[i])
//         }
//         return newArr.map(value => value.toString())
// }
// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(newArray(array))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// let sortNums = (arr,direction) =>{
//     if (direction === 'ascending'){
//        return  arr.sort((function(a, b) { return a - b; }))
//     }
//     else if (direction === 'descending'){
//         return  arr.sort((function(a, b) { return b - a; }))
//     }
// }
// let nums = [11,21,3]
// console.log(sortNums(nums, 'descending'));

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((u1,u2)=>{
//     return u2.monthDuration - u1.monthDuration
// })

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = sort.filter(value => {
//    return  value.monthDuration > 5
// })









