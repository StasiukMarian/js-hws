// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let postContainer = document.createElement('div')
postContainer.classList.add('post-container')
let clearAll = document.createElement('button')
clearAll.classList.add('clear-all')
clearAll.innerText = 'to clear all'
clearAll.onclick = ()=> {
    localStorage.clear()
    location.reload()
}
document.body.append(postContainer)
let posts = JSON.parse(localStorage.getItem('j'))
for (let post of posts){
    let postDiv = document.createElement('div')
    postDiv.classList.add('post-wrap')
    postContainer.append(postDiv , clearAll)
    postDiv.innerHTML = `
        <div class="post-id">id: ${post.id} </div>
        <div class="post-title">title: ${post.title} </div>
        <div class="post-body">body: ${post.body} </div>
    `
    let commentButton = document.createElement('button')
    commentButton.classList.add('comment-button')
    commentButton.innerText = 'Comments'
    postDiv.append(commentButton)
    commentButton.onclick = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments').
        then(function (response){
            let jsonC = response.json()
            return jsonC
        }).then(comments => {
            let commentWrap = document.createElement('div')
            commentWrap.classList.add('comment-wrap')
            postDiv.append(commentWrap)
            for (let comment of comments){
                if (post.id === comment.postId){
                    let commentDiv = document.createElement('div')
                    commentDiv.classList.add('comment-div')
                    commentWrap.append(commentDiv)
                    commentDiv.innerHTML = `
                    <div class="comment-id">id: ${comment.id} </div>
                    <div class="comment-name">name: ${comment.name} </div>
                    <div class="comment-email">email: ${comment.email} </div>
                    <div class="comment-body">body: ${comment.body} </div>
                    `
                }
            }
        })
        commentButton.disabled = true
    }
}