// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let f1 = document.getElementById('name')
let f2 = document.getElementById('count')
let f3 = document.getElementById('price')
let f4 = document.getElementById('picture')
let saveButton = document.getElementById('save')

let creator = (name,count,price,image)=>{
    let values = {
        name:name,
        count:count,
        price:price,
        image:image
    }
    let list = JSON.parse(localStorage.getItem('k')) || []
    list.push(values)
    localStorage.setItem('k',JSON.stringify(list))
}
saveButton.onclick = (e) =>{
    e.preventDefault()
    creator(f1.value, f2.value,f3.value,f4.value)
}