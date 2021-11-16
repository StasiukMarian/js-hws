// 1.--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrayNumber = [1,2,3,4,5]
// console.log(arrayNumber)
// let arrayString =['a', 'b', 'c', 'd', 'e']
// console.log(arrayString)
// let arrayMix = [1,'second', true, false, 5]
// console.log(arrayMix)

// 2.Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrayNum = [];
// arrayNum[0]= 1;
// arrayNum[1]= 2;
// arrayNum[2]= 3;
// arrayNum[3]= 4;
// arrayNum[4]= 5;
// console.log(arrayNum)

// 3.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0 ; i < 10; i++ ){
//     document.write(`<div>item</div>`)
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0; i < 10 ; i++){
//     document.write(`<div> item ${i} </div>`)
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0
// while (i < 20 ){
//     document.write(`<h1> item </h1>`)
//     i++
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0
// while (i < 20 ){
//     document.write(`<h1>item ${i} </h1>`)
//     i++
// }

// 4.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayNums = [1,2,3,4,5,6,7,8,9,10]
//
// for (let i = 0 ;i < arrayNums.length ; i++){
//     console.log(arrayNums[i])
// }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
// for (let i=0; i < arrayStrings.length; i++){
//     console.log(arrayStrings[i])
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayDifferent = [1 , 2 , 'three', 'four', 5 , 6 , 'seven', true , 9.1, 'ten']
//
// for (let i = 0 ; i < arrayDifferent.length; i++){
//     console.log(arrayDifferent[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayDifferent = [1 , 2 , 'three', 'four', 5 , 6 , 'seven', true , 9.1, 'ten', false, true, false, true]
//
// for (let i = 0 ; i < arrayDifferent.length; i++){
//     if(typeof arrayDifferent[i] ==='boolean'){
//         console.log(arrayDifferent[i])
//     }
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayDifferent = [1 , 2 , 'three', 'four', 5 , 6 , 'seven', true , 9.1, 'ten', false, true, false, true]
//
// for (let i = 0 ; i<arrayDifferent.length; i++){
//     if (typeof arrayDifferent[i] === 'number'){
//         console.log(arrayDifferent[i])
//     }
// }
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayDifferent = [1 , 2 , 'three', 'four', 5 , 6 , 'seven', true , 9.1, 'ten', false, true, false, true]
// for (let i = 0 ; i < arrayDifferent.length; i++){
//     if(typeof arrayDifferent[i] === 'string'){
//         console.log(arrayDifferent[i])
//     }
// }

// 5.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let arrayOfTen = []
//
// arrayOfTen[0]= 1 ;
// arrayOfTen[1]= 2 ;
// arrayOfTen[2]= 'three' ;
// arrayOfTen[3]= 'four' ;
// arrayOfTen[4]= true ;
// arrayOfTen[5]= false ;
// arrayOfTen[6]= 7 ;
// arrayOfTen[7]= 8 ;
// arrayOfTen[8]= 'nine' ;
// arrayOfTen[9]= true ;

// for (let i = 0 ; i < arrayOfTen.length; i++){
//     console.log(arrayOfTen[i])
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0 ; i < 10; i++){
//     console.log(i + ' : ' + arrayOfTen[i])
// }

// for (let i = 0 ; i < 10 ; i++){
//     document.write(`<div> ${i} : ${arrayOfTen[i]} </div>`)
// }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0 ; i < 100 ; i++){
//     console.log( i + ' ' + arrayOfTen[i])
// }

// for (let i = 0 ; i < 100 ; i++){
//     document.write(`<div> ${i} : ${arrayOfTen[i]} </div>`)
// }

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0 ; i < 100 ; i=i+2){
//     console.log(i + ': ' + arrayOfTen[i])
// }

// for (let i = 0 ; i < 100 ; i=i+2){
//     document.write(`<div> ${i} : ${arrayOfTen[i]} </div>`)
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(let i=0; i < 100; i++){
//     if (i % 2 === 0 ){
//         console.log(i + ': ' + arrayOfTen[i])
//     }
// }
//
// for (let i = 0 ; i < 100 ; i++){
//     if (i % 2 === 0 ){
//     document.write(`<div> ${i} : ${arrayOfTen[i]} </div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for(let i=0; i < 100; i++){
//     if (i % 2 === 1 ){
//         console.log(i + ': ' + arrayOfTen[i])
//     }
// }

// for (let i = 0 ; i < 100 ; i++){
//     if (i % 2 === 1 ){
//     document.write(`<div> ${i} : ${arrayOfTen[i]} </div>`)
//     }
// }