// 1.- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.createElement('div')
// div.id = 'text'
// div.innerText = 'hi!'
// let button = document.createElement('button')
// button.onclick = function (){
// div.style.display = 'none'
// }
// document.body.append(div, button)

// 2.- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let buttonHider = document.createElement('button')
//
// buttonHider.onclick = function (){
//     buttonHider.style.display = 'none'
// }
// document.body.appendChild(buttonHider)

// 3.- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button =document.getElementById('button')
// button.onclick = function (){
//     let age = document.getElementById('age').value
//     if (age < 18 ){
//         alert('your age is not enough to visit this site')
//     }
//     else if (age >= 18) {
//         alert('welcome')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menuElement = document.getElementsByClassName('menu')[0]
// let hider = document.getElementsByClassName('hider')[0]
//
//     hider.addEventListener('click', function (){
//     menuElement.classList.toggle('menu')
//     })


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let items = [
// //         {title: 'monday', body: 'visit lesson on 20:00'},
// // ]
// //
// // let wrapper = document.createElement('div');
// // for (const item of items) {
// //     let div = document.createElement('div');
// //     let h3 = document.createElement('h3');
// //     let p = document.createElement('p');
// //     let btn = document.createElement('button');
// //
// //     h3.innerText = `${item.title}`;
// //     p.innerHTML = `${item.body}`;
// //     btn.innerHTML = 'hide'
// //
// //     btn.onclick = () => {
// //         p.classList.add('hide');
// //     }
// //     div.append(h3, p, btn);
// //     wrapper.append(div);
// // }
// // document.body.appendChild(wrapper)

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1))
// };
// console.log(capitalize('top bot mid'));

// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.

// function rec (a,b){
//     if (a < b){
//         a++;
//         console.log(a)
//         if (a > b){
//             return;
//         }
//         rec (a,b)
//     }
//     else if(a > b ){
//         a--;
//         console.log(a)
//         if (b === a){
//             return;
//         }
//         rec (a,b)
//     }
//
// }
// rec (1000,100)

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.

// let total = 0
// function sumArray(arr){
//    let newArr = arr.split('')
//     for (let i = 0 ; i < newArr.length; i++){
//         total += Number(newArr[i])
// }
// }
// sumArray('12' )
// console.log(total)

function print10 (n){
    if (n<11){
        print10(n+1)
        // document.write(n+ '</br>' )
        console.log(n)
    }
}
print10(1)