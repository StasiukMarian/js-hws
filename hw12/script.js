//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let divWrap = document.createElement('div')
// divWrap.classList.add('wrap')
// document.body.append(divWrap)
// fetch('https://jsonplaceholder.typicode.com/posts').
//     then(function (response){
//         let jsonb = response.json()
//     return jsonb
// }).then(users =>{
//     for (let user of users){
//        let divElement =  document.createElement('div')
//         divElement.classList.add('div-post')
//         let idH3 = document.createElement('h3')
//         idH3.innerText = `Id - ${user.id}.`
//         let divTitle = document.createElement('div')
//         divTitle.classList.add('title')
//         divTitle.innerText = `title - ${user.title}`
//         let bodyDiv = document.createElement('div')
//         bodyDiv.classList.add('body-div')
//         bodyDiv.innerText = `content - ${user.body}`
//         divWrap.append(divElement)
//         divElement.append(idH3,divTitle,bodyDiv)
//     }
//
// })


//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentWrap = document.createElement('div')
commentWrap.classList.add('wrapper')
document.body.append(commentWrap)
fetch('https://jsonplaceholder.typicode.com/comments').
then(function (response){
    let json = response.json()
    return json
}).then(comment =>{
    for (let item of comment ){
        let elementDiv = document.createElement('div')
        elementDiv.classList.add('item')
        let idh3 = document.createElement('h3')
        idh3.innerText = `id : ${item.id}.`
        let nameDiv = document.createElement('div')
        nameDiv.innerText = `name : ${item.name}`
        let emailDiv = document.createElement('div')
        emailDiv.innerText =`email : ${item.email}`
        let contentDiv = document.createElement('div')
        contentDiv.innerText = `body : ${item.body}`
        commentWrap.append(elementDiv)
        elementDiv.append(idh3,nameDiv,emailDiv,contentDiv)
    }
})