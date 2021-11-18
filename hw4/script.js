// 1.  створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle (a,b){
//     let result = a * b
//     return result
// }
// let x = rectangle(5, 4)
// console.log(x)

// 2.- створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle (r){
//     Pi = 3.14
//     let result
//     result = Pi *(r**2)
//     return result
// }
// let x = circle(7)
// console.log(x)

// 3.- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// function cylinder (r,h){
//     Pi = 3.14
//     let result
//     result = 2*Pi*r*h
//     return result
// }
//
// let y = cylinder(5, 10)
// console.log(y)

// 4.- створити функцію яка приймає масив та виводить кожен його елемент

// function printArray(arr){
//     for (let item of arr ){
//         return arr
//     }
// }
//
// let x = printArray([1,2,3,4,5,6,7,8])
// console.log(x)

// 5.- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     document.write(`<h1>${text}</h1>`)
// }
// paragraph('Hello, World !' )
// paragraph('Hello, okten !')

// 6.- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulli(li){
//     document.write(`<ul>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`</ul>`)
// }
// ulli('hi!')

// 7.- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulli(li,count){
//     document.write(`<ul>`)
//         for(let i = 0 ; i < count ; i++){
//             document.write(`<li>${li}</li>`)
//         }
//     document.write(`</ul>`)
// }
// ulli('hi!', 4)

// 8.- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayList (arr){
//     document.write(`<ul>`)
//     for (let item of arr ){
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayList([true,false,1,2,'hi!'])

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arrayList (arr){
//
// for (let users of arr){
//     document.write(`<div>${users.id} - ${users.name} - ${users.age}`)
//     document.write(`</div>`)
// }
// }
// let array = [
//     {
//         id : 1,
//         name: 'Marian',
//         age: 20
//     },
//     {
//         id : 2,
//         name: 'Ihor',
//         age: 21
//     }
// ]
//
// arrayList(array)

