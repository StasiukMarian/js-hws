// 1.- Дано натуральное число n. Выведите все числа от 1 до n.

// let iterator = (i,n) => {
//     console.log(i)
//     i++
//     if (i > n ){
//         return
//     }
//     return iterator(i,n)
// }
// iterator(1,20)


// 2.- Даны два целых числа A и В .
// Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let iterator = (a,b) =>{
//     if (a<b ){
//         for (let i = a  ;i <= b; i++ ) {
//             console.log(i)
//         }
//         return
//     }
//     else if (a>b){
//         for (let j = a; j >= b ; j--){
//             console.log(j)
//         }
//         return
//     }
//    iterator(a,b)
// }
// iterator(20,10)

// 3. функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let switcher = (arr, count) =>{
//    for (let i = 0 ; i <= arr.length; i++) {
//        let index = arr[i]
//        if (i === count) {
//            arr[i] = arr[i + 1]
//            arr[i + 1] = index
//        }
//    }
//     console.log(arr)
// }
// switcher([9,8,0,4], 1)

// 4.- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// const arr = [1,0,1,0,1,1,0,0,2,3,4,5,6,0,7,0,7,0];
// let moveZeros = (arr) => {
//     let length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (arr[i] === 0) {
//             arr.push(0);
//             arr.splice(i, 1);
//             length--;
//             i--;
//         }
//
//     }
//     return arr;
// }
// moveZeros(arr)
// console.log(arr);



















