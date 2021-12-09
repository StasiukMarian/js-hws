//створити форму з інпутами для name та age.
//При відправці форми записати об'єкт в localstorage
// let button = document.getElementById('button')
// let input1 = document.getElementById('name')
// let input2 = document.getElementById('age')
// let k = 'key'
// let nameAge = function (name,age){
//     let obj = {name : name , age: age}
//     localStorage.setItem(k,(JSON.stringify(obj)))
// }
// button.onclick = () => {
//     nameAge(input1.value, input2.value);
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let inp1 = document.getElementById('model')
let inp2 = document.getElementById('type')
let inp3 = document.getElementById('volume')
let button2 = document.getElementById('button2')
let construct = function (model, type , volume){
    let obj = {model : model , type: type, volume: volume}
    let cars = JSON.parse(localStorage.getItem('cars')) || []
    cars.push(obj)
    localStorage.setItem('cars',(JSON.stringify(cars)))
}
button2.onclick = (e) =>{
    e.preventDefault()
    construct(inp1.value, inp2.value, inp3.value)
}
