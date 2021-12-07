// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let info = function (){
//     document.body.addEventListener('click', function (e){
//         console.log(`Назва тегу:${e.target.localName} Список класів: ${e.target.classList} ІД : ${e.target.id} Розміри : ${e.target.offsetWidth}*${e.target.offsetHeight}`)
//     })
// }
// info()

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let info = function () {
//     document.body.addEventListener('click', function (e) {
//         let div = document.createElement('div')
//         let button = document.createElement('button')
//         div.innerText = ` Назва тегу: ${e.target.localName} Список класів: ${e.target.classList} ІД: ${e.target.id} Розміри : ${e.target.offsetWidth}*${e.target.offsetHeight}`
//         div.style.height = '200px'
//         div.style.width = '200px'
//         div.style.border = '1px solid black'
//         document.body.append(div)
//         document.body.append(button)
//         button.onclick = (e) => {
//             div.classList.toggle('hide')
//         }
//     },{once:true})
// }
// info()


// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let checker = function (){
// let cb1 = document.getElementById('cb1')
// let cb2 = document.getElementById('cb2')
// let cb3 = document.getElementById('cb3')
// cb1.addEventListener('click' , function () {
//         for (let users of usersWithAddress) {
//         if (users.status === false){
//             console.log(users)
//
//         }
//
//         }
// },{once:true})
// cb2.addEventListener('click', function (){
//     for (let users of usersWithAddress){
//         if (users.age >= 29 ){
//             console.log(users)
//         }
//     }
//
// },{once:true})
// cb3.addEventListener('click' , function (){
//     for (let item of usersWithAddress){
//         for (let keys in item.address){
//             if (item.address[keys] === 'Kyiv'){
//                 console.log(item)
//             }
//         }
//     }
// },{once:true})
// }
// checker()

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let offset = 0;
// let line = document.querySelector('.line');
// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')
// next.addEventListener('click', function (){
//     offset += 200;
//     if (offset > 400 ){
//         offset = 0
//     }
//     line.style.left = -offset + 'px'
// })
// prev.addEventListener('click', function (){
//     offset = offset - 200;
//     if (offset < 0  ){
//         offset = 400
//     }
//     line.style.left = -offset + 'px'
// })