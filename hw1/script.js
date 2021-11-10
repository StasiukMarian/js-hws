// //--------------------------Task1----------------------------------
// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write

{   let a = 'hello';
    let b = 'owu';
    let c = 'com';
    let d = 'ua';
    let e = 1;
    let f = 10;
    let g = -999;
    let h = 123;
    let j = 3.14;
    let k = 2.7;
    let l = 16;
    let z = true;
    let x = false;
    console.log(a, b, c, d, e, f, g, h, j, k, l, z, x);
    document.write(a, ' ', b,' ', c,' ', d,' ', e,' ', f,' ', g,' ', h,' ', j,' ', k,' ', l,' ', z,' ', x , ' ')
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(j);
// alert(k);
// alert(l);
// alert(z);
// alert(x);
//--------------------------Task2----------------------------------
//- Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
 a = '10';
 b = 10;
 c = 'string';
 d = 'and';
 e = 'number';
 f = 'are';
 g = 'different';
 h = 42;
 j = 42.42;
 k = null;
 l = undefined;
 z = false;
 x = true;
    console.log(a, b, c, d, e, f, g, h, j, k, l, z, x);
    document.write(a, ' ', b,' ', c,' ', d,' ', e,' ', f,' ', g,' ', h,' ', j,' ', k,' ', l,' ', z,' ', x)
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(j);
// alert(k);
// alert(l);
// alert(z);
// alert(x);
}
//--------------------------Task3----------------------------------
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

    const firstName = 'Марян';
    const lastName = 'Стасюк';
    const middleName = 'Олегович';

    let person = lastName + ' ' + firstName + ' '+ middleName
    console.log(person)

//--------------------------Task4----------------------------------
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

    // let name = prompt('Ваше імя?');
    //     console.log(name);
    // let middle = prompt('По-Батькові?');
    //     console.log(middle);
    // let age = prompt('Ваш вік?');
    // console.log(age);
    // console.log('Вітаю ' + name +' ' + middle + '.' + ' Тобі' +' '+ age +' років');

//--------------------------Task5----------------------------------
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//--------------------------Task6----------------------------------
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
console.log(5<6);
console.log(5>=6);
console.log(5>6);
console.log(5===6);
console.log(10===10);
console.log(10>=10);
console.log(10>10);
console.log(10<10);
console.log(10!==10);
console.log(123==='123');
console.log(123=='123');
// --------------------------Task7----------------------------------
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
{
    let str = "20";
    let a = 5;
    document.write(str + a + "<br/>"); //р-т при знаку + 205 тому , що тип стрінг прирівнює тип намбер і конкатинує його , бо js динамічна мова , а у випадках з іншими символами типу - * / стрінг поводиться як намбер )
    document.write(str - a + "<br/>");
    document.write(str * "2" + "<br/>");
    document.write(str / 2 + "<br/>");
}