// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
let container = document.createElement('div')
container.classList.add('user-container')

document.body.append(container)

let users = JSON.parse(localStorage.getItem('k'))
for (let user of users) {
    let userDiv = document.createElement('div')
    userDiv.classList.add('user-div')
    userDiv.innerHTML = `
        <div >id: ${user.id}</div>
        <div>name: ${user.name}</div>
        <div>username: ${user.username} </div>
        <div>email: ${user.email} </div>
        <div>phone: ${user.phone} </div>
        <div>website: ${user.website} </div>
    `
    container.append(userDiv)
    for (let keysadress in user.address) {
        if (user.address[keysadress] !== user.address.geo) {
            let addressDiv = document.createElement('div')
            addressDiv.innerHTML = ` 
        <div>${keysadress}: ${user.address[keysadress]}</div>
        `
            userDiv.append(addressDiv)
        } else {
            for (let keys2 in user.address.geo) {
                let geoDiv = document.createElement('div')
                geoDiv.innerHTML = `
            <div>${keys2} : ${user.address.geo[keys2]}</div>
            `
                userDiv.append(geoDiv)
            }
        }
    }
    for (let kkk in user.company) {
        let companyDiv = document.createElement('div')
        companyDiv.innerHTML = `
        <div>${kkk}: ${user.company[kkk]}</div>
        `
        userDiv.append(companyDiv)
    }
    let postButton = document.createElement('button')
    postButton.innerText = 'Post of current user'
    postButton.classList.add('post-button')
    userDiv.append(postButton)
    postButton.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').
        then(function (response) {
            let jsonP = response.json()
            return jsonP
        }).then(posts => {
            let postContainer = document.createElement('div')
            postContainer.classList.add('post-container')
            userDiv.append(postContainer)
            for (let post of posts){
                if (user.id === post.userId){
                    let postTitle = document.createElement('div')
                    postTitle.classList.add('post-title')
                    postContainer.append(postTitle)
                    postTitle.innerText = `title - ${post.title}`
                    let postInfo = document.createElement('button')
                    postInfo.classList.add('post-info')
                    postInfo.innerText = 'Post details'
                    postTitle.append(postInfo)
                    postInfo.onclick = () => {
                        document.location.href = 'post-details.html'
                        let postDetails = JSON.parse(localStorage.getItem('j')) || []
                        postDetails.push(post)
                        localStorage.setItem('j', (JSON.stringify(postDetails)))
                    }
                }
            }
        })
        postButton.disabled = true
    }
}