// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
//  которая имеет детальную информацию про объект на который кликнули
let divWrap = document.createElement('div')
divWrap.classList.add('div-wrap')
document.body.appendChild(divWrap)
fetch('https://jsonplaceholder.typicode.com/users').
    then(function (response){
    let json = response.json()
    return json
}).then(users =>{
    for (let user of users){
        let userWrap = document.createElement('div')
        userWrap.classList.add('user-wrap')
        userWrap.innerHTML =
            `
            <div class="title">${user.id} - ${user.name}</div>
            `
        let nextButton = document.createElement('button')
        nextButton.classList.add('user-details')
        nextButton.innerText = 'To details'
        divWrap.append(userWrap)
        userWrap.appendChild(nextButton)
        nextButton.onclick = ()=>{
            document.location.href = 'user-details.html'
            let details = JSON.parse(localStorage.getItem('k')) || []
            details.push(user)
            localStorage.setItem('k', (JSON.stringify(details)))
        }
    }
})
