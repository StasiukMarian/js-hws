// Всі функції повинні бути описані стрілочним типом!!!!

// 1. - створити функцію яка обчислює та повертає площу прямокутника висотою

// let sOfRectangle  = (a , b ) => a * b
// console.log(sOfRectangle(3, 4));

// 2.- створити функцію яка обчислює та повертає площу кола

    // let Pi = 3.14
    // let sOfCircle = (r) => Pi * (r**2)
    // console.log(sOfCircle(7))

// 3.- створити функцію яка обчислює та повертає площу циліндру

    // let Pi = 3.14
    // let sOfCylinder = (r,h) => 2*Pi*r*h
    // console.log(sOfCylinder(5,10))

// 4.- створити функцію яка приймає масив та виводить кожен його елемент

    // let arr = (array) =>{
    // for (let elements of array){
    //     return array
    // }
    // }
// console.log(arr([1, 2, 3, 4, 5]));

// 5.- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

    // let p = (text) => document.write(`<h1>${text}</h1>`)

// 6.- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    // let ulli = (text) => {
    //     document.write(`<ul>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`</ul>`)
    // }
    // ulli('hi!')

// 7.- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    // let ulli = (text,count) =>{
    //     document.write(`<ul>`)
    //         for (let i = 0 ; i < count ; i ++){
    //         document.write(`<li>${text}</li>`)
    //     }
    //     document.write(`</ul>`)
    // }
    // ulli('hi!', 3)

// 8.- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

 // let arrayMix = (arr) =>{
 //     document.write(`<ul>`)
 //     for (let item of arr ){
 //        document.write(`<li>${item}</li>`)
 //    }
 //     document.write(`</ul>`)
 // }
 // arrayMix([1,true, false, 'hello'])

// 9.- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let objArray = (arr) => {
//      for (let users of arr){
//     document.write(`<div>${users.id} - ${users.name} - ${users.age}`)
//     document.write(`</div>`)
// }}
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
// objArray(array)