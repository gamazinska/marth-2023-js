//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [100500, true, 122, 'ua', 123, false, 100, 'hello', 'owu', 'com']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr[4]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
//----------------------------------------
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = [{title: 'Algebra', pageCount: 150, genre: 'mathematics'},
    {title: 'Algebra', pageCount: 100, genre: 'mathematics'} ,
    {title: 'Geometry', pageCount: 150, genre: 'mathematics'}
]
console.log(book1)
//----------------------------------
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book2 = [{title: 'Geometry',
    pageCount: 200,
    genre: 'mathematics',
    authors: [{name: 'Grant',
        age: 60},
        {name: 'lui',
            age: 66}]
},
    {title: 'Algebra',
        pageCount: 250,
        genre: 'mathematics',
        authors: [{name: 'Dania',
            age: 50},
            {name: 'David',
                age: 67} ]
    }
]
console.log(book2)
//----------------------------------
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user1 = [{ name: 'Asya', username:'assyun1',password:1986},
    { name: 'Vanya', username:'vanyu2',password:1987},
    { name: 'Vika', username:'vika1',password:1980},
    { name: 'Anna', username:'anna1',password:1988},
    { name: 'Sasha', username:'sasha1',password:1989},
    { name: 'Olya', username:'olya1',password:1988},
    { name: 'Nina', username:'nina1',password:1985},
    { name: 'Nikita', username:'nikita1',password:1990},
    { name: 'pasha', username:'pasha1',password:1982},
    { name: 'misha', username:'misha1',password:1981}
]
console.log(user1[0].password);
console.log(user1[1].password);
console.log(user1[2].password);
console.log(user1[3].password);
console.log(user1[4].password);
console.log(user1[5].password);
console.log(user1[6].password);
console.log(user1[7].password);
console.log(user1[8].password);
console.log(user1[9].password);
//-------------------------------------------------------------------------


//Логічні розгалуження:
//    - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//let x = 1;
//if(x !== 0) {
// console.log('Yes');
//}else {
//    console.log('No');
//}
//------------------------------------------------------------------
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

//let time = 20;

//if (time < 15) {
//  document.write('one');
//}else if (time >= 16 && time <30) {
//    document.write('two');
//}else if (time >= 31 && time <45) {
//    document.write('three');
//}else if (time >= 46 && time <60){
//    document.write('four');
//}else {
//    console.log('error');
//}

//---------------------------------------------------------------------
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//let x = 20;
//x > 0 && x <= 60 ? console.log('first') : x > 10 && x <=20 ?console.log('second') :
//    x > 20 && x <= 31 ? console.log('third') : console.log('error');
//-------------------
//let day = +prompt();
//if ( day < 10) {
//   document.write('one');
//}else if (day >= 10 && day <20){
//    document.write('two');
//}else if (day >= 20 && day <30) {
//    document.write('three');
//}else {
//    console.log('error');
//}
//


//
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//let num = +prompt();
//switch (num) {
//    case 1:
//        console.log('sunday');
//        break;
//    case 2:
//        console.log('monday');
//        break;
//   case 3:
//        console.log('tuesday');
//        break;
//    case 4:
//        console.log('wednesday');
//        break;
//    case 5:
//        console.log('thursday');
//        break;
//    case 6:
//        console.log('friday');
//        break;
//    case 7:
//        console.log('saturday');
//        break;
//    default:
//        console.log('error');
//}
//-----------------------

//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.

//let a = 1;
//let b =10;
//if (a>b) {
//    console.log(a)
//} else  if (b>a) {
//    console.log(b);
//} else if (a===b) {
//    console.log('equal');
//} else {
//    console.log('error');
//}
//-------------------


//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

//let x = +prompt() || 'default';
//console.log(x);

//or

//let x = 'str';
//if (!!x === false) {
//    console.log('default');
//}else {
//  console.log  ('Hello');
//}

//or

//let x = 'str';
//if (!x !== f''else) {
//    console.log('default');
//}else {
//  console.log  ('Hello');
//}

//or

//let x = 0;
//if (0) {
//    console.log('hello');
//} else {
//    console.log('default');
//}

