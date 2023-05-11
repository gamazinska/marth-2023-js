//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//- створити функцію яка обчислює та повертає площу кола з радіусом r
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//- створити функцію яка приймає масив та виводить кожен його елемент
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//function rectangle (a, b) {
//return a * b;
//}
//console.log(rectangle(3,5));


//-----------------------------------
//- створити функцію яка обчислює та повертає площу кола з радіусом r
//function circle (Pi,r) {
//return Pi * r *r ;
//}
//console.log(circle(3.14,4));

//------------------------------------------
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(Pi,r,h) {
//   return 2 * Pi * r * (r + h);
//}
//console.log(cylinder(3.14,5,8));

//---------------------------------------------

//- створити функцію яка приймає масив та виводить кожен його елемент
//let users = [
//{name: 'vasya', age: 31, status: false},
// {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true},
//{name: 'olya', age: 28, status: false},
//{name: 'max', age: 30, status: true},
// {name: 'anya', age: 31, status: false}
//];
//function userFilter (users) {
//   for (const user of users) {
//       console.log(user)
//    }
//}
// userFilter(users);

//-----------------------------------------
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//function writer(text) {
//   document.write(` <p>${text}</p>`);
//}
//writer('It was hard work. How I wished my wish would start working.');

//----------------------------------------
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//function writer(text) {
// document.write(`
//<ul>
// <li>${text}</li>
// <li>${text}</li>
//<li>${text}</li>
//  </ul>
//`);
//}
//writer('It was hard work. How I wished my wish would start working.');


//-----------------------------------------
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//function writer(text, counter) {
//    document.write(`<ul>`);
//for (let i = 0; i < counter; i++) {
//    document.write(`<li>${text}</li>`);
//}
//   document.write(`<ul>`);
//}
//writer('It was hard work. How I wished my wish would start working.', 6);
//or----


//--------------------------------
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//function arrayPrinter(listOfItems) {

//    document.write(`<ul>`)
//    for (const listOfItem of listOfItems) {
//        document.write(`<li>${listOfItem}</li>`)
//    }
//    document.write(`</ul>`)
//}

//  let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react'];
//arrayPrinter(listOfItems);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


//function arrayPrinter(listOfItems) {
//    for (const listOfItem of listOfItems) {
//        document.write(`<div>
//<h2> ${listOfItem.id}. ${listOfItem.name} ${listOfItem.age}</h2>
//   </div>`)
//   }
//}

//let listOfItems = [
// {id:1, name: 'vasya', age: 31},
//{id:2, name: 'petya', age: 30 },
//{id:3, name: 'kolya', age: 29},
//{id:4, name: 'olya', age: 28},
//{id:5, name: 'max', age: 30},
//{id:6, name: 'anya', age: 31}
//];
//arrayPrinter(listOfItems);



//- створити функцію яка повертає найменьше число з масиву
//let arr = [4,2,13,12,10,66,-1]
//function  foo(array) {
//    let min = array[0];
//   for (const item of array) {
//       if (item < min) {
//    f       min = item;
//       }
//   }
//   return min;
//}
//let foo1 = foo(arr);
//console.log(foo1);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,3];
//function foo(array) {
//    let sum = 0;
//    for (const item of array) {
//        sum =+ item;
//    }
//    return sum;
//}
//console.log(