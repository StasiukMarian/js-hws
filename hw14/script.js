// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
let money = 100
let coffee = true
function wakeUp (time){
     return new Promise((resolve,reject) =>{
    setTimeout(()=> {
        if (time >= 8 && time <= 8.30   ) {
            resolve (time)
           console.log('wake up at ' + time )
        }
        else{
            console.log('wake up at' + time)
            reject ('you overslept work')
        }
    }, 300)
    })
}

food = true
 function haveBreakfast (timeLeft) {
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (timeLeft >= 15){
                resolve (food)
                console.log('having breakfast')
            }
            else{
                reject ('not enough time to eat')
            }
        }, 100)
     })
 }
function goingToWork (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (money > 20 ){
            money -= 10
            console.log('you arrived to work')
            resolve(money)
            }
            else {
                console.log('you havent got enough money ')
                reject('work more)')
            }
        }, 2000)
    })
}
function drinkCoffee (){
    return new Promise((resolve,reject)=> {
        setTimeout(() =>{
            if (coffee ){
                money -= 15
                console.log('coffee break')
                resolve(money)
            }
            else{
                console.log('not today')
                reject ('no coffee')
            }
        },500)
    })
}
function haveDinner (time){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time === 14){
                money -= 50
                console.log('have a dinner')
                resolve(money)
            }
            else if ( time !== 14 ){
                console.log('today without dinner')
                reject('sorry')
            }
        },1000)
    })
}
function goingHome (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (money >= 10 ){
                money -= 10
                console.log('you arrived to home')
                resolve(money)
            }
            else {
                console.log('you havent got enough money ')
                reject('work more)')
            }
        }, 2000)
    })
}
function eveningDinner () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
                resolve (food)
                console.log('having evening dinner')

        }, 200)
    })
}

async function daily() {
    await wakeUp(8.30)
    await haveBreakfast(15)
    await  goingToWork()
    await  drinkCoffee()
    await  haveDinner(14)
    await goingHome()
    await eveningDinner()
}
daily()