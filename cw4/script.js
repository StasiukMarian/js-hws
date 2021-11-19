// 2.- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxValue(a,b,c){
//         if (a > b && a > c ){
//             console.log(a)
//         }else if(b > a && b > c ){
//             console.log(b)
//         }else if (c > a && c > b ){
//             console.log(c)
//         }
// }
// maxValue(5, 20, 10)

// 2.- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minValue(a,b,c){
//     if (a > b  && a < c  ){
//             console.log(a)
//         }else if(b < a && b < c ){
//             console.log(b)
//         }else if (c < a && c < b ){
//             console.log(c)
//         }
// }
// minValue(10,5,1)

// 3.- створити функцію яка повертає найбільше число з масиву

// function maxArray (arr){
//     for (let i = 0 ; i < arr.length; i++){
//         console.log(Math.max(...arr))
//     }
// }
// maxArray([10,20,30,40])

// 4.- створити функцію яка повертає найменьше число з масиву

// function minArray(arr){
//     for (let i = 0 ; i < arr.length; i++){
//         console.log(Math.min(...arr))
//     }
// }
// minArray([10,20,30])

// 5.- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let total = 0
// function sumArray(arr){
//     for (let i = 0 ; i < arr.length; i++){
//         total+= arr[i]
// }
// }
// sumArray([10,20,30])
// console.log(total)

// 6.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let total = 0
// let avg = 0
// function avgArray(arr){
// for (let i = 0; i < arr.length; i++ ){
//     total +=arr[i]
//
//     }
//     avg = total/arr.length
// }
// avgArray([5,10,15])
// console.log(avg)

// 7.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minmax(arr){
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
// minmax([10,20,30])

// 8.- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random(arr){
//     for (let i=0 ; i<20; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     return arr
// }
// x = random([])
// console.log(x)

// 9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// function random (arr,limit){
//     for (let i = 0 ; i < 20 ; i++){
//         arr[i] = Math.round(Math.random() * limit)
//     }
//     return arr
// }
// x = random([], 20)
// console.log(x)

// 10.- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse (){
//     let arr = [1,2,3]
//     let arr1 =[]
//     for (let i = arr.length - 1, j=0   ; i >= 0; i--, j++){
//         arr1.push(arr[i])
//     }
//     return arr1
// }
// x = reverse()
// console.log(x)