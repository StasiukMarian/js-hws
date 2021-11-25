// 1.створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function numOfArgs(){
//     if ( arguments.length === 1){
//         console.log(arguments[0])
//     }
//     if (arguments.length === 2 ){
//         console.log(arguments[0] + arguments[1])
//     }
// }

// 2.- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
    let arr3 = []
    function sumArr(arr1, arr2) {
        for (let i = 0, j =0 ;  i < arr1.length; i++, j++){
            arr3.push(arr1[i]+arr2[j])
            }
        return arr3
    }
    sumArr([1,2,3,4], [2,3,4,5])
    console.log(arr3)

// 3.- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let array = [{name: 'Dima', age: 13}, {model : 'Camry'}]
// let keyArray = []
// function arrKeys(arr){
//
//     for (let i = 0 ; i < arr.length; i ++){
//         let arrElement = arr[i]
//         for (const keys in arrElement){
//             keyArray.push(keys)
//         }
//     }
//     return keyArray
// }
//
// arrKeys([{name: 'Dima', age: 13}, {model : 'Camry'}])
// console.log(keyArray)

// 4. - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array = [{name: 'Dima', age: 13}, {model : 'Camry'}]
// let nameArray = []
//
// function arrNames(arr){
//     for (let i = 0 ; i < arr.length; i++) {
//         let arrElement = arr[i]
//         for (let names in arrElement) {
//             nameArray.push(arrElement[names])
//         }
//     }
//     return nameArray
// }
//
// arrNames([{name: 'Dima', age: 13}, {model : 'Camry'}])
// console.log(nameArray)