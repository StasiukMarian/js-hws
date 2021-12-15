let container = document.createElement('div')
container.classList.add('container')
document.body.append(container)
let items = JSON.parse(localStorage.getItem('k'))
let deleteButton = document.createElement('button')
deleteButton.classList.add('deleteAll')
deleteButton.onclick = () =>{
    localStorage.clear()
    location.reload()
}
deleteButton.innerText = `Clear all`
for (let item of items){
    let productDiv = document.createElement('div');
    productDiv.className = 'product';
    let content = document.createElement('div');
    let img = document.createElement("IMG");
    img.style.width = '200px'
    img.src = `${item.image}`
    content.innerText = `Name: ${item.name}\n count: ${item.count}\n price: ${item.price} `;
    let deleteItem = document.createElement('button')
    deleteItem.classList.add('delete')
    deleteItem.innerText = `Delete current item`
    productDiv.append(content,img,deleteItem);
    container.append(productDiv,deleteButton);
    deleteItem.onclick = ()=>{
        productDiv.style.display = `none`
    }
}