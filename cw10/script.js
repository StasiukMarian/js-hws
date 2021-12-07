// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let button = document.querySelector('button')
// let form1 = document.forms.f1
// let form2 = document.forms.f2
// button.addEventListener('click', function (){
//     console.log(form1.name.value)
//     console.log(form1.age.value)
//     console.log(form2.name.value)
//     console.log(form2.age.value)
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['клоун', 'дурак','ідіот']
//
// let input = document.createElement('input')
// let button = document.createElement('button')
//
// let div =  document.createElement('div')
// document.body.append(input,button,div)
// button.addEventListener('click', function (){
//     let valueInput = input.value
//     for(let word of array){
//         if (valueInput === word){
//             alert('Ви ввели заборонене слово')
//         }
//         else if (valueInput !== word){
//             div.innerText = `${valueInput}`
//         }
//     }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let array = ['клоун', 'дурак','ідіот']
// let input = document.createElement('input')
// let button = document.createElement('button')
// document.body.append(input,button)
//
// button.addEventListener('click', function (){
//     let value = input.value
//     for (let word of array){
//         if (value.includes(word)){
//             alert('wrong')
//         }
//         else {
//            console.log(value)
//         }
//     }
//
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Create';
// document.body.append(input1, input2, input3, button);
//
// button.addEventListener('click', function () {
//     let tr = input1.value;
//     let td = input2.value;
//     let enterText = input3.value;
//
//     function Table(tr, td, inner) {
//
//         let divTable = document.createElement('div');
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 divTable.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     Table(tr, td, enterText);
// })

