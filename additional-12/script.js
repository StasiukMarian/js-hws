// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let wrapDiv = document.createElement('div')
wrapDiv.classList.add('wrap')
document.body.append(wrapDiv)
fetch('https://jsonplaceholder.typicode.com/users').
then(function (response){
    let json = response.json()
    return json
}).then(users => {
for (let user of users){
let userDiv = document.createElement('div')
    userDiv.innerHTML = `
    <div>${user.id}</div>
    <div>${user.name}</div>
    <div>${user.username}</div>
    <div>${user.email}</div>
    <div>${user.phone}</div>
    <div>${user.website}</div>
    `
    wrapDiv.append(userDiv)
    for (let keysadress in user.address ) {
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
for (let kkk in user.company){
    let companyDiv = document.createElement('div')
    companyDiv.innerHTML = `
        <div>${kkk}: ${user.company[kkk]}</div>
        `
    userDiv.append(companyDiv)
}
let postButton = document.createElement('button')
    postButton.innerText = `show posts`
    userDiv.append(postButton)
    postButton.onclick= () => {
    fetch('https://jsonplaceholder.typicode.com/posts').
    then(function (response){
        let jsonPost = response.json()
        return jsonPost
    }).then(posts => {
        for (let post of posts){
            if (user.id === post.id){
            let divPost = document.createElement('div')
            divPost.classList.add('post')
            divPost.innerHTML = `
          <h3>ID: ${post.id}</h3>
          <h4>Title: ${post.title}</h4>
          <h5>Body: ${post.body}</h5>
        `
                let commentButton = document.createElement('button')
                commentButton.innerText = 'comment'
                userDiv.append(divPost)
                divPost.append(commentButton)
                commentButton.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/comments').
                    then(function (response){
                        let jsonComment = response.json()
                        return jsonComment
                    }).then(comments => {
                        for (let comment of comments) {
                            if (post.id === comment.postId) {
                                let divCard = document.createElement('div')
                                divCard.classList.add('comment')
                                divCard.innerHTML = `
                                        <h4>ID: ${comment.id}</h4>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `
                                divPost.append(divCard)
                            }
                        }
                        commentButton.disabled = true
                })
                }
            }
        }
        postButton.disabled = true
    })
    }

}
})
