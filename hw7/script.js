// 1.- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array = [
//      user1 = new User(1, 'Marian','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user2 = new User(2, 'Andriy','Pupkin', 'blabla@gmail.com', 380931010103),
//      user3 = new User(3, 'Oleh','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user4 = new User(4, 'Ivan','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user5 = new User(5, 'Olha','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user6 = new User(6, 'Iryna','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user7 = new User(7, 'Valeriya','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user8 = new User(8, 'Roman','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user9 = new User(9, 'Pavlo','Stasiuk', 'blabla@gmail.com', 380931010103),
//      user10 = new User(10, 'Maksym','Stasiuk', 'blabla@gmail.com', 380931010103)
// ]
// console.log(array)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => {
//   if (value.id %2 === 0){
//       return true
//   }
// })
// console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = array.sort((a,b) => {
//   return a.id - b.id
// })
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client extends User {
//     constructor(id, name, surname, email, phone, order) {
//         super(id,name, surname, email, phone);
//         this.order = order;
//     }
// }
// let newArray = [
//     user1 = new Client(1, 'Marian','Stasiuk', 'blabla@gmail.com', 380931010103, ['хліб', 'молоко']),
//      user2 = new Client(2, 'Andriy','Pupkin', 'blabla@gmail.com', 380931010103,['хліб', 'молоко', 'яйця'] ),
//      user3 = new Client(3, 'Oleh','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко','помідори']),
//      user4 = new Client(4, 'Ivan','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб']),
//      user5 = new Client(5, 'Olha','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко','цукор','макарони']),
//      user6 = new Client(6, 'Iryna','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко','хліб', 'молоко','хліб', 'молоко','хліб', 'молоко']),
//      user7 = new Client(7, 'Valeriya','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко']),
//      user8 = new Client(8, 'Roman','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко','хліб', 'молоко','хліб', 'молоко','хліб', 'молоко','хліб', 'молоко','хліб', 'молоко']),
//      user9 = new Client(9, 'Pavlo','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко']),
//      user10 = new Client(10, 'Maksym','Stasiuk', 'blabla@gmail.com', 380931010103,['хліб', 'молоко','хліб', 'молоко'])
// ]
//
// console.log(newArray)
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortByOrder = newArray.sort((a,b)=>{
//   return  a.order.length - b.order.length
// })
//
// console.log(sortByOrder)