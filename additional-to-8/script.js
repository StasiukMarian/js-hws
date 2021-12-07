let arr = []
function rec (startElement) {
    console.log(startElement)
    if (startElement.children.length) {
        for (let item of startElement.children) {

             let x =  arr.push(item.classList)

                if (x.length > 2){
                    return  x
                }
            rec(item)
        }

    }
}
rec(document.body)
console.log(arr)
