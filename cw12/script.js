// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let wrapDiv = document.createElement('div')
wrapDiv.classList.add('wrap')
document.body.append(wrapDiv)
fetch('https://jsonplaceholder.typicode.com/posts').
then(function (response){
    let json = response.json()
    return json
}).then(posts => {
    for (let post of posts) {
        let divPost = document.createElement('div')
        divPost.classList.add('post')
        divPost.innerHTML = `
          <h3>ID: ${post.id}</h3>
          <h4>Title: ${post.title}</h4>
          <h5>Body: ${post.body}</h5>
        `
        let postButton = document.createElement('button')
        postButton.classList.add('button')
        postButton.innerText = 'tap to open comments'

        wrapDiv.append(divPost, postButton)
        postButton.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/comments').then(function (response) {
                let jsonComm = response.json()
                return jsonComm
            }).then(comments => {
                for (let comment of comments) {
                    if (post.id === comment.id) {
                        let divCard = document.createElement('div')
                        divCard.classList.add('comment')
                        divCard.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `
                        let closeButton = document.createElement('button')
                        closeButton.innerText = `to close comments`
                        divPost.append(divCard,closeButton)
                        closeButton.onclick = () =>{
                            if (divCard){
                                divCard.style.display = `none`
                                closeButton.style.display = `none`
                            }
                        }
                    }
                }
            })
        }


    }
})
