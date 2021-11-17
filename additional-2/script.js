// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//парними
// let array = []
//
// for (let i=0 , j =0 ; i < 100; i=i+2, j++){
//     array[j] = i+2
// }
// console.log(array)

//непарними
// let array = []
//
// for (let i =1 , j=0; i < 100 ; i=i+2, j++){
//     array[j] = i
// }
// console.log(array)

//Заповнити масив 20ма рандомними числами. 2. Вивести за допомогою console.log кожен третій елемент
// let array = []
// let newArray = []
// for(let i=0 ; i < 20 ; i ++){
//   array[i] =Math.round((Math.random() * 20))
//   newArray = array
// }
// for (let j = 0 ; j < newArray.length ; j+=3){
//   console.log(newArray[j])
// }

//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним. та записати їх в новий масив
// let array = []
// let newArray = []
// let thirdArray = []
// for(let i=0 ; i < 20 ; i ++){
//   array[i] =Math.round((Math.random() * 20))
//   newArray = array
// }
// for (let j = 0 ; j < newArray.length ; j+=3){
//   if (newArray[j] % 2 === 0 ){
//     thirdArray = newArray
//     console.log(j + ': ' +thirdArray[j])
//  }
// }

//5. Вивести кожен елемент масиву, сусід справа якого є парним

// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
//
// for (let i = 0 ; i < array.length; i++){
//     if (array[i+1] %2 === 0){
//         console.log(array[i])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100,250,50,168,120,345,188].reduce((a, b) => a + b, 0);
// let result
//  result = array / [100,250,50,168,120,345,188].length;
// console.log(result)

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [4, 5, 10 , 20 , 6]
// let newArray = []
//
// for (let i = 0 ; i < array.length; i++){
//     newArray = array[i]*5
//     console.log(newArray)
// }

// 8.Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array =  [1, true , 3, 4, 'a' ,'c' , 6 , 7 ]
// let newArray = []
// for (let i=0 ; i<array.length; i++){
//     if (typeof array[i] === 'number'){
//         newArray = array
//         console.log(newArray[i])
//     }
// }

//9 - ?

// 10.- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c']
//
// for (let  i = 0 ; i < array.length;i++){
//     if (typeof array[i] === 'string'){
//         console.log(array[0]+array[1]+array[2])
//     }
// }

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0
// while (i < array.length){
//     if (typeof array[i] === 'string' ){
//         console.log(array[0]+array[1]+array[2])
//     }
//     i++
// }


