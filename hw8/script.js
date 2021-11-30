
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content')
// console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
// console.log(rules.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший
console.log(content.innerText = 'well , this is my text ');

// -- замініть текст параграфа з id 'rules' на будь-який інший
console.log(rules.innerText = 'i change this text to some another text');

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let bodyList = document.body.children
for (let element of bodyList){
    element.style.background = 'red'
    element.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesList = rules.children
console.log(rulesList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByTagName('ul')
let fcRules1 = fcRules[0]
console.log(fcRules1)
let fcRulesList =fcRules1.children
for (let listElement of fcRulesList){
    listElement.style.color = 'red'
    listElement.style.background = 'blue'
}