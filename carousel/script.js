//---------------CAROUSEL-------------------------
let offset = 0;
let line = document.querySelector('.line');
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
next.addEventListener('click', function (){
    offset += 200;
    if (offset > 400 ){
        offset = 0
    }
    line.style.left = -offset + 'px'
})
prev.addEventListener('click', function (){
    offset = offset - 200;
    if (offset < 0  ){
        offset = 400
    }
    line.style.left = -offset + 'px'
})
//------------------------------------------------------

let elements = document.getElementsByClassName('menu-item')
for (let i = 0 ; i < elements.length; i++){
    elements[i].addEventListener('mouseenter', showMenu)
    elements[i].addEventListener('mouseleave', hideMenu)
}
function showMenu (){
    if(this.children.length > 1){
        this.children[1].style.height = 'auto'
        this.children[1].style.opacity = '1'
        this.children[1].style.overflow = 'visible'

    }
}
function hideMenu (){
    if(this.children.length > 1){
        this.children[1].style.height = '0'
        this.children[1].style.opacity = '0'
        this.children[1].style.overflow = 'hidden'

    }
}