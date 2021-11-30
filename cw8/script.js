// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').classList.add('sep-2021')
// b) робить шириниу елементу ul 400px
let ulElement = document.querySelector('ul' )
ulElement.style.width = '400px'
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let ulCollection = ulElement.children
for (let items of ulCollection ){
    items.style.width = '50%'
    // e) отримує всі елементи li та змінює ім колір фону на сірий
    items.style.background = 'silver'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let list2 = document.getElementsByClassName('listElement2');
for (let item of list2){
    console.log(item.textContent)
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName('a')
for (let item of aList){
    item.classList.add('anchor')
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
    if (item.textContent === 'link3'){
        item.style.fontSize = '40px'
    }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
    item.classList.add('element_XXX')
    item.textContent ='XXX'
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let hList = document.getElementsByClassName('sub-header')
let x = prompt('Enter background color: ')
let y = prompt('Enter text color : ')
for (let item of hList){
    item.style.background = x
    if (item.textContent ==='content 2 segment'){
        item.style.color = y
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentList = document.getElementsByClassName('content_1')
let z = prompt('Enter your text : ')
for (let item of contentList){
    item.textContent = z
}
// l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p')
for (let item of pList){
    item.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2')
for (let item of text2){
    item.textContent = 'sep-2021'
}