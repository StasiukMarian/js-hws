// 1.- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minValue = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else if (c < a && c < b) {
//         console.log(c)
//     }
// }

// 2.- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxValue = (a,b,c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     }
// }

// 3.- створити функцію яка повертає найбільше число з масиву

// let maxArray = (array) =>{
//     for (let num of array){
//     console.log (Math.max(...array))
//     }
// }

// 4.- створити функцію яка повертає найменьше число з масиву

// let minArray = (arr) => {
//     for (let num of arr){
//         console.log(Math.min(...arr))
//     }
// }

// 5.- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let total = 0
// let avgArr = (arr) =>{
//     for (let num of arr){
//         total += num
//     }
// }

// 6.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let total = 0
// let avg = 0
// let avgArr = (arr) => {
//     for (let i = 0 ; i < arr.length; i++){
//         total+= arr[i]
//     }
//     avg = total/arr.length
// }

// 7.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minmax = (arr) =>{
//     let minValue = arr[0]
//     let maxValue = arr[0]
//     for (let num of arr){
//         if (num>maxValue){
//             maxValue=num
//         }
//         if (num <minValue){
//             minValue= num
//         }
//     }
//     console.log(maxValue)
//     return minValue
// }

// 8.- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let random = (arr) => {
//     for (let i = 0 ; i < 20; i++){
//         arr[i] = Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(random([]))

// 9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let random = (arr, limit) => {
//     for (let i = 0 ; i < limit; i++){
//         arr[i] = Math.round(Math.random()*limit)
//     }
//     return arr
// }
// console.log(random([],100))

// 10.- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arrNew = []
// let reverse = (arr) => {
//     for (let i = arr.length-1 ; i >= 0 ; i--){
//         arrNew.push(arr[i])
//     }
// }
// reverse([1,2,3])
// console.log(arrNew)